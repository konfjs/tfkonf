import * as t from '@babel/types';
import type { Block } from './schema.js';
import { toPascalCase } from './utils.js';

export function generateInterfaceDeclaration(
    resourceName: string,
    block: Block,
): t.ExportNamedDeclaration {
    return t.exportNamedDeclaration(
        t.tsInterfaceDeclaration(
            t.identifier(`${toPascalCase(resourceName)}Args`),
            null,
            null,
            // TODO: Implement interface body
            t.tsInterfaceBody([]),
        ),
    );
}
