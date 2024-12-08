import path from 'node:path';
import {
    ClassDeclarationStructure,
    ParameterDeclarationStructure,
    Project,
    Scope,
    SourceFile,
    StructureKind,
} from 'ts-morph';
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

export function createClassDeclaration(
    resourceType: string,
    isProvider = false,
): ClassDeclarationStructure {
    const constructorParameters: ParameterDeclarationStructure[] = [
        {
            kind: StructureKind.Parameter,
            name: 'terraformConfig',
            type: 'TerraformConfig',
            isReadonly: true,
            scope: Scope.Protected,
        },
    ];
    if (!isProvider) {
        constructorParameters.push({
            kind: StructureKind.Parameter,
            name: 'resourceName',
            type: 'string',
            isReadonly: true,
            scope: Scope.Protected,
        });
    }
    constructorParameters.push({
        kind: StructureKind.Parameter,
        name: 'args',
        type: `${toPascalCase(resourceType)}Args`,
        isReadonly: true,
    });
    const classDeclaration: ClassDeclarationStructure = {
        kind: StructureKind.Class,
        name: resourceType,
        extends: 'TerraformResource',
        isExported: true,
        ctors: [
            {
                parameters: constructorParameters,
            },
        ],
    };

    return classDeclaration;
}
