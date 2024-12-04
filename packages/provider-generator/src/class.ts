import { ClassDeclarationStructure, SourceFile, StructureKind } from 'ts-morph';
import { toPascalCase } from './utils.js';

export function generateClassDeclaration(sourceFile: SourceFile, className: string) {
    sourceFile.addImportDeclaration({
        moduleSpecifier: '@tfkonf/core',
        namedImports: ['TerraformConfig', 'TerraformResource'],
    });

    const classDeclaration: ClassDeclarationStructure = {
        kind: StructureKind.Class,
        name: className,
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
                        type: `${toPascalCase(className)}Args`,
                    },
                ],
                statements: [
                    `super(terraformConfig, "resource", args, resourceName, "${className}");`,
                ],
            },
        ],
    };

    return classDeclaration;
}
