import path from 'node:path';
import { ClassDeclarationStructure, Project, SourceFile, StructureKind } from 'ts-morph';
import { toPascalCase } from './utils.js';

export function createSourceFile(
    project: Project,
    outDir: string,
    resourceType: string,
): SourceFile {
    const sourceFile = project.createSourceFile(
        path.join(outDir, `${resourceType}.ts`),
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

    return sourceFile;
}

export function createClassDeclaration(resourceType: string): ClassDeclarationStructure {
    const classDeclaration: ClassDeclarationStructure = {
        kind: StructureKind.Class,
        name: resourceType,
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
                        type: `${toPascalCase(resourceType)}Args`,
                    },
                ],
            },
        ],
    };

    return classDeclaration;
}
