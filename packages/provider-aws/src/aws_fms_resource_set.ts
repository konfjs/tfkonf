import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsFmsResourceSetArgsResourceSet {
  description?: string;
  name: string;
  resource_type_list?: string[];
}
export interface AwsFmsResourceSetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFmsResourceSetArgs {
  tags?: {
    [key: string]: string;
  };
  resource_set: AwsFmsResourceSetArgsResourceSet;
  timeouts?: AwsFmsResourceSetArgsTimeouts;
}
export class aws_fms_resource_set extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFmsResourceSetArgs) {
    super(config, "resource", args, resourceName, "aws_fms_resource_set");
  }
}