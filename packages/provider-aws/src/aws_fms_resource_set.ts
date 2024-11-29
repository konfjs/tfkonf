import { TerraformConfig, TerraformResource } from "tfs";
export interface ResourceSet {
  description?: string;
  name: string;
  resource_type_list?: string[];
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFmsResourceSetArgs {
  tags?: {
    [key: string]: string;
  };
  resource_set: ResourceSet;
  timeouts: Timeouts;
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