import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCodebuildFleetArgsScalingConfigurationTargetTrackingScalingConfigs {
  metric_type?: string;
  target_value?: number;
}
export interface AwsCodebuildFleetArgsScalingConfiguration {
  max_capacity?: number;
  scaling_type?: string;
  target_tracking_scaling_configs: AwsCodebuildFleetArgsScalingConfigurationTargetTrackingScalingConfigs;
}
export interface AwsCodebuildFleetArgsVpcConfig {
  security_group_ids: string[];
  subnets: string[];
  vpc_id: string;
}
export interface AwsCodebuildFleetArgs {
  base_capacity: number;
  compute_type: string;
  environment_type: string;
  fleet_service_role?: string;
  image_id?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  scaling_configuration: AwsCodebuildFleetArgsScalingConfiguration;
  vpc_config: AwsCodebuildFleetArgsVpcConfig;
}
export class aws_codebuild_fleet extends TerraformResource {
  readonly arn!: string;
  readonly created!: string;
  readonly id!: string;
  readonly last_modified!: string;
  readonly overflow_behavior?: string;
  readonly status!: any[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodebuildFleetArgs) {
    super(config, "resource", args, resourceName, "aws_codebuild_fleet");
  }
}