import { TerraformConfig } from './config.js';
import { BlockNode, HCLNode } from './hcl.js';

type BlockID =
    | 'resource'
    | 'data'
    | 'provider'
    | 'variable'
    | 'output'
    | 'locals'
    | 'module'
    | 'moved'
    | 'terraform'
    | 'check'
    | 'import'
    | 'removed'
    | 'ephemeral';

/**
 * Represents a Terraform resource.
 * Each TerraformResource will belong to a TerraformConfig.
 */
export abstract class TerraformResource implements HCLNode {
    constructor(
        protected readonly terraformConfig: TerraformConfig,
        protected readonly blockID: BlockID,
        /**
         * The arguments for the resource.
         * Some resources don't require names.
         */
        readonly args: { [key: string]: any },
        /**
         * Additional metadata for the resource.
         * E.g. block types etc.
         */
        protected readonly meta?: any,
        /**
         * The type of the resource.
         * If the resource has a type, then it requires a name.
         * @example "google_service_account"
         */
        protected readonly resourceType?: string,
        /**
         * The name of the resource.
         * @example "my_service_account"
         */
        protected readonly resourceName?: string,
    ) {
        terraformConfig.addResource(this);
    }

    toHCL(): string {
        let blockID: string = this.blockID;
        if (this.resourceType) {
            blockID = `${blockID} ${this.resourceType}`;
        }
        if (this.resourceName) {
            blockID = `${blockID} ${this.resourceName}`;
        }
        return new BlockNode(blockID, this.args, this.meta).toHCL(0);
    }
}
