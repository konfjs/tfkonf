#!/usr/bin/env tsx
import fs from 'node:fs';
import path from 'node:path';
import { Command } from 'commander';
import { generateProviders } from './generate.js';
import type { ProviderSchema } from './schema.js';

function main() {
    const program = new Command();
    program
        .name('@tfkonf/provider-generator')
        .argument('<schema-path>', 'Terraform provider schema JSON file path')
        .parse();

    // @ts-expect-error Commander.argument will throw an error if not provided
    const schemaPath = path.join(process.cwd(), program.args[0]);

    const providerSchemas: Record<string, ProviderSchema> = JSON.parse(
        fs.readFileSync(schemaPath, 'utf8'),
    ).provider_schemas;

    generateProviders(providerSchemas);
}

main();
