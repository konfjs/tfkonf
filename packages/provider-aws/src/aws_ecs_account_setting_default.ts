import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEcsAccountSettingDefaultArgs {
  name: string;
  value: string;
}
export class aws_ecs_account_setting_default extends TerraformResource {
  readonly id?: string;
  readonly principal_arn!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcsAccountSettingDefaultArgs) {
    super(config, "resource", args, resourceName, "aws_ecs_account_setting_default");
  }
}