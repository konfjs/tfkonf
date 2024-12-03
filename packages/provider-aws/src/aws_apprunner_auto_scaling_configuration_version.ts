import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsApprunnerAutoScalingConfigurationVersionArgs {
  auto_scaling_configuration_name: string;
  max_concurrency?: number;
  max_size?: number;
  min_size?: number;
  tags?: {
    [key: string]: string;
  };
}
export class aws_apprunner_auto_scaling_configuration_version extends TerraformResource {
  readonly arn!: string;
  readonly auto_scaling_configuration_revision!: number;
  readonly has_associated_service!: boolean;
  readonly id?: string;
  readonly is_default!: boolean;
  readonly latest!: boolean;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApprunnerAutoScalingConfigurationVersionArgs) {
    super(config, "resource", args, resourceName, "aws_apprunner_auto_scaling_configuration_version");
  }
}