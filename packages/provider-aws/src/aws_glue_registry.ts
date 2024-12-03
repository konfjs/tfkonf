import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsGlueRegistryArgs {
  description?: string;
  registry_name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_glue_registry extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueRegistryArgs) {
    super(config, "resource", args, resourceName, "aws_glue_registry");
  }
}