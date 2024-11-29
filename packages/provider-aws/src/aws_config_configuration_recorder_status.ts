import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsConfigConfigurationRecorderStatusArgs {
  is_enabled: boolean;
  name: string;
}
export class aws_config_configuration_recorder_status extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigConfigurationRecorderStatusArgs) {
    super(config, "resource", args, resourceName, "aws_config_configuration_recorder_status");
  }
}