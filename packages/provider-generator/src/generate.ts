import fs from 'node:fs';
import path from 'node:path';
import generate from '@babel/generator';
import * as t from '@babel/types';
import chalk from 'chalk';
import { generateClassDeclaration } from './class.js';
import type { ProviderSchema } from './schema.js';

export function generateProviders(providerSchemas: Record<string, ProviderSchema>) {
    for (const [providerName, schema] of Object.entries(providerSchemas)) {
        console.log(`Generating TypeScript code for provider: ${chalk.green(providerName)}`);
        fs.rmdirSync(providerName, { recursive: true });
        fs.mkdirSync(providerName, { recursive: true });

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
                        t.stringLiteral('tfs'),
                    ),
                    // TODO: Generate Interfaces here
                    generateClassDeclaration(resourceName),
                ],
                [],
                'module',
            );
            // @ts-expect-error
            const { code } = generate(ast, {});

            fs.writeFileSync(path.join(providerName, `${resourceName}.ts`), code, {
                encoding: 'utf8',
            });
        }
    }
}
