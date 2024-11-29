import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCodebuildResourcePolicyArgs {
  policy: string;
  resource_arn: string;
}
export class aws_codebuild_resource_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodebuildResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_codebuild_resource_policy");
  }
}