import fs from 'node:fs';
import path from 'node:path';
import pc from 'picocolors';
import {
    ClassDeclarationStructure,
    ExportDeclarationStructure,
    IndentationText,
    Project,
    QuoteKind,
    StructureKind,
} from 'ts-morph';
import { generateProperties } from './properties.js';
import type { ProviderSchema } from './schema.js';
import { toPascalCase } from './utils.js';

export function generateProviders(providerSchemas: Record<string, ProviderSchema>) {
    const project = new Project({
        tsConfigFilePath: path.join(import.meta.dirname, '..', 'tsconfig.json'),
        manipulationSettings: {
            indentationText: IndentationText.TwoSpaces,
            quoteKind: QuoteKind.Double,
            insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
            useTrailingCommas: true,
        },
    });

    for (const [providerName, schema] of Object.entries(providerSchemas)) {
        console.log(`Generating TypeScript code for provider: ${pc.green(providerName)}`);
        const outDir = `provider-${path.basename(providerName)}`;
        fs.rmSync(outDir, { recursive: true, force: true });
        fs.mkdirSync(outDir, { recursive: true });

        const indexTs = project.createSourceFile(
            path.join(outDir, 'index.ts'),
            {
                kind: StructureKind.SourceFile,
            },
            {
                overwrite: true,
            },
        );

        /**
         * Always collect Structures first.
         * Because sourceFile.add() operations are very slow.
         */
        const exportDeclarations: ExportDeclarationStructure[] = [];

        for (const [resourceName, resourceBlock] of Object.entries(schema.resource_schemas)) {
            console.log(
                `Generating TypeScript code for resource: ${pc.yellowBright(resourceName)}`,
            );

            const sourceFile = project.createSourceFile(
                path.join(outDir, `${resourceName}.ts`),
                {
                    kind: StructureKind.SourceFile,
                },
                {
                    overwrite: true,
                },
            );

            sourceFile.addImportDeclaration({
                moduleSpecifier: '@tfkonf/core',
                namedImports: ['TerraformConfig', 'TerraformResource'],
            });

            const classDeclaration: ClassDeclarationStructure = {
                kind: StructureKind.Class,
                name: resourceName,
                extends: 'TerraformResource',
                isExported: true,
                ctors: [
                    {
                        parameters: [
                            {
                                name: 'terraformConfig',
                                type: 'TerraformConfig',
                            },
                            {
                                name: 'resourceName',
                                type: 'string',
                            },
                            {
                                name: 'args',
                                type: `${toPascalCase(resourceName)}Args`,
                            },
                        ],
                    },
                ],
            };

            generateProperties(sourceFile, classDeclaration, resourceName, resourceBlock.block, '');

            exportDeclarations.push({
                kind: StructureKind.ExportDeclaration,
                namespaceExport: resourceName,
                moduleSpecifier: `./${resourceName}.js`,
            });
        }
        indexTs.addExportDeclarations(exportDeclarations);

        project.saveSync();
    }
}
