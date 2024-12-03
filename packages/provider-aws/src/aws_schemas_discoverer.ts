import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSchemasDiscovererArgs {
  description?: string;
  source_arn: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_schemas_discoverer extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSchemasDiscovererArgs) {
    super(config, "resource", args, resourceName, "aws_schemas_discoverer");
  }
}