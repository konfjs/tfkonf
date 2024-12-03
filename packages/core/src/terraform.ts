import { BackendConfig } from './backend.js';
import { TerraformConfig } from './config.js';
import { BlockNode } from './hcl.js';
import { TerraformResource } from './resource.js';
import { Exclusive } from './utils.js';

/**
 * https://developer.hashicorp.com/terraform/language/terraform
 */
interface TerraformArgs {
    required_version?: string;
    required_providers?: {
        [name: string]: {
            source: string;
            version?: string;
            configuration_aliases?: string[];
        };
    };
    provider_meta?: {
        [provider: string]: {
            [key: string]: string;
        };
    };
    backend: Exclusive<BackendConfig>;
    cloud?: {
        organization?: string;
        workspaces: {
            name?: string;
            project?: string;
            tags?: string[];
        };
        /**
         * @default "app.terraform.io"
         */
        hostname?: string;
        token?: string;
    };
    experiments?: string[];
}

export class Terraform extends TerraformResource {
    constructor(
        protected readonly config: TerraformConfig,
        readonly args: TerraformArgs,
    ) {
        super(config);
    }

    toHCL(): string {
        const terraformBlock = new BlockNode('terraform', {});
        const backendType = Object.keys(this.args.backend)[0];
        if (backendType) {
            const backendConfig = this.args.backend[backendType as keyof Exclusive<BackendConfig>];
            if (backendConfig) {
                const backendBlock = new BlockNode(`backend ${backendType}`, backendConfig);
                terraformBlock.children.push(backendBlock);
            }
        }
        if (this.args.provider_meta) {
            for (const [provider, val] of Object.entries(this.args.provider_meta)) {
                terraformBlock.children.push(new BlockNode(`provider_meta "${provider}"`, val));
            }
        }
        if (this.args.required_providers) {
            terraformBlock.children.push(
                new BlockNode('required_providers', this.args.required_providers),
            );
        }
        if (this.args.cloud) {
            const meta = {
                workspaces: {
                    isBlock: true,
                },
            };
            const cloudBlock = new BlockNode('cloud', this.args.cloud, meta);
            terraformBlock.children.push(cloudBlock);
        }
        return terraformBlock.toHCL(0);
    }
}
