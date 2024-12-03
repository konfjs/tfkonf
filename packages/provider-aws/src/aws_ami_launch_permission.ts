import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAmiLaunchPermissionArgs {
  account_id?: string;
  group?: string;
  image_id: string;
  organization_arn?: string;
  organizational_unit_arn?: string;
}
export class aws_ami_launch_permission extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAmiLaunchPermissionArgs) {
    super(config, "resource", args, resourceName, "aws_ami_launch_permission");
  }
}