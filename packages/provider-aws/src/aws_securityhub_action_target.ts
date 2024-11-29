import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSecurityhubActionTargetArgs {
  description: string;
  identifier: string;
  name: string;
}
export class aws_securityhub_action_target extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubActionTargetArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_action_target");
  }
}