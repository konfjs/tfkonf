import fs from 'node:fs';
import path from 'node:path';
import { Command } from 'commander';
import { generateProviders } from './generate.js';
import type { ProviderSchema } from './schema.js';

function main() {
    const program = new Command();
    program
        .name('@tfs/provider-generator')
        .argument('<schema-path>', 'Terraform provider schema JSON file path')
        .parse();

    const schemaPath = path.join(process.cwd(), program.args[0]);

    const providerSchemas: Record<string, ProviderSchema> = JSON.parse(
        fs.readFileSync(schemaPath, 'utf8'),
    ).provider_schemas;

    generateProviders(providerSchemas);
}

main();
