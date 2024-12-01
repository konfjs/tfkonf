import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import { HCLNode } from './hcl.js';
import { TerraformResource } from './resource.js';

/**
 * Represents a Terraform configuration file.
 * Configuration will contain a list of resources.
 */
export class TerraformConfig implements HCLNode {
    readonly resources: TerraformResource[] = [];

    constructor(public readonly filename: string) {}

    addResource(resource: TerraformResource): void {
        this.resources.push(resource);
    }

    /**
     * Converts the Terraform configuration to HCL.
     */
    toHCL(level: number): string {
        return this.resources.map((resource) => resource.toHCL(level)).join('\n\n');
    }

    /**
     * Writes the Terraform configuration to the file system.
     */
    save(): void {
        fs.writeFileSync(this.filename, this.toHCL(0), 'utf8');
        console.log(`Terraform configuration file saved to ${this.filename}`);
        if (isTerraformInstalled()) {
            console.log(`Formatting file ${this.filename}`);
            execSync(`terraform fmt ${this.filename}`);
        }
    }
}

function isTerraformInstalled(): boolean {
    try {
        const output = execSync('terraform --version', { stdio: 'pipe' }).toString();
        return output.toLowerCase().includes('terraform');
    } catch (error) {
        return false;
    }
}
