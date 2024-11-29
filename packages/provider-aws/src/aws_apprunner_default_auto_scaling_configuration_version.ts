import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsApprunnerDefaultAutoScalingConfigurationVersionArgs {
  auto_scaling_configuration_arn: string;
}
export class aws_apprunner_default_auto_scaling_configuration_version extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApprunnerDefaultAutoScalingConfigurationVersionArgs) {
    super(config, "resource", args, resourceName, "aws_apprunner_default_auto_scaling_configuration_version");
  }
}