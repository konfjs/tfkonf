import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsOpsworksPermissionArgs {
  stack_id: string;
  user_arn: string;
}
export class aws_opsworks_permission extends TerraformResource {
  readonly allow_ssh?: boolean;
  readonly allow_sudo?: boolean;
  readonly id?: string;
  readonly level?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpsworksPermissionArgs) {
    super(config, "resource", args, resourceName, "aws_opsworks_permission");
  }
}