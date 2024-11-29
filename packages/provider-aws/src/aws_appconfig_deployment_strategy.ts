import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAppconfigDeploymentStrategyArgs {
  deployment_duration_in_minutes: number;
  description?: string;
  final_bake_time_in_minutes?: number;
  growth_factor: number;
  growth_type?: string;
  name: string;
  replicate_to: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_appconfig_deployment_strategy extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppconfigDeploymentStrategyArgs) {
    super(config, "resource", args, resourceName, "aws_appconfig_deployment_strategy");
  }
}