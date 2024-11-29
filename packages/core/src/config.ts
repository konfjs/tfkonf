import * as fs from 'node:fs';
import { TerraformResource } from './resource.js';

/**
 * Represents a Terraform configuration file.
 * Configuration will contain a list of resources.
 */
export class TerraformConfig {
    readonly resources: TerraformResource[];

    constructor(readonly filePath: string) {
        this.resources = [];
    }

    addResource(resource: TerraformResource): void {
        this.resources.push(resource);
    }

    /**
     * Converts the Terraform configuration to HCL.
     */
    toHCL(): string {
        return this.resources.map((resource) => resource.toHCL()).join('\n\n');
    }

    /**
     * Writes the Terraform configuration to the file system.
     */
    save(): void {
        fs.writeFileSync(this.filePath, this.toHCL(), 'utf8');
        console.log(`Terraform configuration written to ${this.filePath}`);
    }
}
