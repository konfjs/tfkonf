import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGameliftFleetArgsCertificateConfiguration {
  certificate_type?: string;
}

export interface AwsGameliftFleetArgsEc2InboundPermission {
  from_port: number;
  ip_range: string;
  protocol: string;
  to_port: number;
}

export interface AwsGameliftFleetArgsResourceCreationLimitPolicy {
  new_game_sessions_per_creator?: number;
  policy_period_in_minutes?: number;
}

export interface AwsGameliftFleetArgsRuntimeConfigurationServerProcess {
  concurrent_executions: number;
  launch_path: string;
  parameters?: string;
}

export interface AwsGameliftFleetArgsRuntimeConfiguration {
  game_session_activation_timeout_seconds?: number;
  max_concurrent_game_session_activations?: number;
  server_process: AwsGameliftFleetArgsRuntimeConfigurationServerProcess;
}

export interface AwsGameliftFleetArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsGameliftFleetArgs {
  build_id?: string;
  description?: string;
  ec2_instance_type: string;
  fleet_type?: string;
  instance_role_arn?: string;
  name: string;
  new_game_session_protection_policy?: string;
  script_id?: string;
  tags?: { [key: string]: string };
  certificate_configuration: AwsGameliftFleetArgsCertificateConfiguration;
  ec2_inbound_permission: AwsGameliftFleetArgsEc2InboundPermission;
  resource_creation_limit_policy: AwsGameliftFleetArgsResourceCreationLimitPolicy;
  runtime_configuration: AwsGameliftFleetArgsRuntimeConfiguration;
  timeouts?: AwsGameliftFleetArgsTimeouts;
}

export class aws_gamelift_fleet extends TerraformResource {
  readonly arn!: string;
  readonly build_arn!: string;
  readonly id?: string;
  readonly log_paths!: string[];
  readonly metric_groups?: string[];
  readonly operating_system!: string;
  readonly script_arn!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsGameliftFleetArgs) {
    super(config, "resource", args, resourceName, "aws_gamelift_fleet");
  }
}
