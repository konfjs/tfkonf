import fs from 'node:fs';
import path from 'node:path';
import generate from '@babel/generator';
import * as t from '@babel/types';
import chalk from 'chalk';
import type { ProviderSchema } from './schema.js';

export function generateProviders(providerSchemas: Record<string, ProviderSchema>) {
    for (const [name, schema] of Object.entries(providerSchemas)) {
        console.log(`Generating TypeScript code for provider: ${chalk.green(name)}`);
        fs.rmdirSync(name, { recursive: true });
        for (const [className, resourceBlock] of Object.entries(schema.resource_schemas)) {
            console.log(
                `Generating TypeScript code for resource: ${chalk.yellowBright(className)}`,
            );
            const ast = t.program([], [], 'module');
            // @ts-expect-error
            const { code } = generate(ast, {});
            fs.mkdirSync(name, { recursive: true });
            fs.writeFileSync(path.join(name, `${className}.ts`), code, { encoding: 'utf8' });
        }
    }
}
