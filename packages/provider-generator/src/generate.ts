import fs from 'node:fs';
import path from 'node:path';
import pc from 'picocolors';
import {
    ExportDeclarationStructure,
    IndentationText,
    Project,
    QuoteKind,
    StructureKind,
} from 'ts-morph';
import { createClassDeclaration, createSourceFile } from './class.js';
import { generateProperties } from './properties.js';
import type { ProviderSchema } from './schema.js';

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

            const sourceFile = createSourceFile(project, outDir, resourceName);
            const classDeclaration = createClassDeclaration(resourceName);

            generateProperties(
                sourceFile,
                classDeclaration,
                'resource',
                resourceName,
                resourceBlock.block,
                '',
            );

            exportDeclarations.push({
                kind: StructureKind.ExportDeclaration,
                namespaceExport: resourceName,
                moduleSpecifier: `./${resourceName}.js`,
            });
        }

        for (const [resourceName, resourceBlock] of Object.entries(schema.data_source_schemas)) {
            const resourceType = `data_${resourceName}`;
            console.log(
                `Generating TypeScript code for data resource: ${pc.yellowBright(resourceType)}`,
            );

            const sourceFile = createSourceFile(project, outDir, resourceType);
            const classDeclaration = createClassDeclaration(resourceType);

            generateProperties(
                sourceFile,
                classDeclaration,
                'data',
                resourceName,
                resourceBlock.block,
                '',
            );

            exportDeclarations.push({
                kind: StructureKind.ExportDeclaration,
                namespaceExport: resourceType,
                moduleSpecifier: `./${resourceType}.js`,
            });
        }

        console.log(
            `Generating TypeScript code for provider resource: ${pc.yellowBright(providerName)}`,
        );
        const resourceType = `${path.basename(providerName)}_provider`;
        const sourceFile = createSourceFile(project, outDir, resourceType);
        const classDeclaration = createClassDeclaration(resourceType, true);

        generateProperties(
            sourceFile,
            classDeclaration,
            'provider',
            resourceType,
            schema.provider.block,
            '',
        );

        exportDeclarations.push({
            kind: StructureKind.ExportDeclaration,
            namespaceExport: resourceType,
            moduleSpecifier: `./${resourceType}.js`,
        });

        indexTs.addExportDeclarations(exportDeclarations);

        project.saveSync();
    }
}
