import { TerraformConfig, TerraformResource } from "tfs";
export interface TargetTrackingConfiguration {
  target_value: number;
}
export interface AutoScalingPolicy {
  target_tracking_configuration: TargetTrackingConfiguration;
}
export interface InstanceDefinition {
  instance_type: string;
  weighted_capacity?: string;
}
export interface LaunchTemplate {
  version?: string;
}
export interface Timeouts {
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
  auto_scaling_policy: AutoScalingPolicy;
  instance_definition: InstanceDefinition;
  launch_template: LaunchTemplate;
  timeouts: Timeouts;
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