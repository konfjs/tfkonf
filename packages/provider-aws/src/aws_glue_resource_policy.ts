import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsGlueResourcePolicyArgs {
  enable_hybrid?: string;
  policy: string;
}
export class aws_glue_resource_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_glue_resource_policy");
  }
}