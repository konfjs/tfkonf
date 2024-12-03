import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsConfigRetentionConfigurationArgs {
  retention_period_in_days: number;
}
export class aws_config_retention_configuration extends TerraformResource {
  readonly id!: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigRetentionConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_config_retention_configuration");
  }
}