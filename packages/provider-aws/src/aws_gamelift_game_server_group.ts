import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsGameliftGameServerGroupArgsAutoScalingPolicyTargetTrackingConfiguration {
  target_value: number;
}
export interface AwsGameliftGameServerGroupArgsAutoScalingPolicy {
  target_tracking_configuration: AwsGameliftGameServerGroupArgsAutoScalingPolicyTargetTrackingConfiguration;
}
export interface AwsGameliftGameServerGroupArgsInstanceDefinition {
  instance_type: string;
  weighted_capacity?: string;
}
export interface AwsGameliftGameServerGroupArgsLaunchTemplate {
  version?: string;
}
export interface AwsGameliftGameServerGroupArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsGameliftGameServerGroupArgs {
  game_server_group_name: string;
  max_size: number;
  min_size: number;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  vpc_subnets?: string[];
  auto_scaling_policy: AwsGameliftGameServerGroupArgsAutoScalingPolicy;
  instance_definition: AwsGameliftGameServerGroupArgsInstanceDefinition;
  launch_template: AwsGameliftGameServerGroupArgsLaunchTemplate;
  timeouts?: AwsGameliftGameServerGroupArgsTimeouts;
}
export class aws_gamelift_game_server_group extends TerraformResource {
  readonly arn!: string;
  readonly auto_scaling_group_arn!: string;
  readonly balancing_strategy?: string;
  readonly game_server_protection_policy?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGameliftGameServerGroupArgs) {
    super(config, "resource", args, resourceName, "aws_gamelift_game_server_group");
  }
}