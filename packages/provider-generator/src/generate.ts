import fs from 'node:fs';
import path from 'node:path';
import generate from '@babel/generator';
import * as t from '@babel/types';
import chalk from 'chalk';
import { generateClassDeclaration } from './class.js';
import { generateInterfaceDeclaration } from './interface.js';
import type { ProviderSchema } from './schema.js';

export function generateProviders(providerSchemas: Record<string, ProviderSchema>) {
    for (const [providerName, schema] of Object.entries(providerSchemas)) {
        console.log(`Generating TypeScript code for provider: ${chalk.green(providerName)}`);
        const outDir = `provider-${path.basename(providerName)}`;
        fs.rmSync(outDir, { recursive: true, force: true });
        fs.mkdirSync(outDir, { recursive: true });

        const resources: string[] = [];

        for (const [resourceName, resourceBlock] of Object.entries(schema.resource_schemas)) {
            console.log(
                `Generating TypeScript code for resource: ${chalk.yellowBright(resourceName)}`,
            );
            const ast = t.program(
                [
                    t.importDeclaration(
                        [
                            t.importSpecifier(
                                t.identifier('TerraformConfig'),
                                t.identifier('TerraformConfig'),
                            ),
                            t.importSpecifier(
                                t.identifier('TerraformResource'),
                                t.identifier('TerraformResource'),
                            ),
                        ],
                        t.stringLiteral('@konfjs/core'),
                    ),
                ],
                [],
                'module',
            );
            generateInterfaceDeclaration(ast, resourceName, resourceBlock.block, '', true);
            generateClassDeclaration(ast, resourceName, resourceBlock.block);
            const { code } = generate.default(ast, {});
            resources.push(resourceName);

            fs.writeFileSync(path.join(outDir, `${resourceName}.ts`), code, {
                encoding: 'utf8',
            });
        }

        const ast = t.program([], [], 'module');
        for (const resource of resources) {
            ast.body.push(
                t.exportNamedDeclaration(
                    null,
                    [t.exportNamespaceSpecifier(t.identifier(resource))],
                    t.stringLiteral(`./${resource}.js`),
                ),
            );
        }
        const { code } = generate.default(ast, {});

        fs.writeFileSync(path.join(outDir, 'index.ts'), code, { encoding: 'utf8' });
    }
}
