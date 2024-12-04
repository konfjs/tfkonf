import { PropertyDeclarationStructure, SourceFile, StructureKind } from 'ts-morph';
import { getTSType } from './interface.js';
import type { Block } from './schema.js';
import { toPascalCase } from './utils.js';

export function generateClassDeclaration(sourceFile: SourceFile, className: string, block: Block) {
    sourceFile.addImportDeclaration({
        moduleSpecifier: '@tfkonf/core',
        namedImports: ['TerraformConfig', 'TerraformResource'],
    });

    sourceFile.addClass({
        name: className,
        extends: 'TerraformResource',
        isExported: true,
        properties: generateClassProperties(block),
        ctors: [
            {
                parameters: [
                    {
                        name: 'config',
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
                statements: [`super(config, "resource", args, resourceName, "${className}");`],
            },
        ],
    });
}

function generateClassProperties(block: Block) {
    if (block.attributes) {
        return Object.entries(block.attributes)
            .map(([attributeName, attributeBody]): PropertyDeclarationStructure | undefined => {
                if (attributeBody.computed) {
                    return {
                        kind: StructureKind.Property,
                        name: `${attributeName}${attributeBody.optional ? '?' : '!'}`,
                        type: getTSType(attributeBody),
                        isReadonly: true,
                    };
                }
                return undefined;
            })
            .filter((property) => property !== undefined);
    }
    return [];

    // TODO: block_types are currently being generated as any.
    // Their interfaces should be generated.
    // TODO: terraform block types must be generated in the meta property.
}
