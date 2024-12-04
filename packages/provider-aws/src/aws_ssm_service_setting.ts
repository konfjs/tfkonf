import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmServiceSettingArgs {
  setting_id: string;
  setting_value: string;
}

export class aws_ssm_service_setting extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmServiceSettingArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_service_setting");
  }
}
