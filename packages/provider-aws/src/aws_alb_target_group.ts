import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAlbTargetGroupArgsHealthCheck {
  enabled?: boolean;
  healthy_threshold?: number;
  interval?: number;
  port?: string;
  protocol?: string;
  unhealthy_threshold?: number;
}

export interface AwsAlbTargetGroupArgsStickiness {
  cookie_duration?: number;
  cookie_name?: string;
  enabled?: boolean;
  type: string;
}

export interface AwsAlbTargetGroupArgsTargetFailover {
  on_deregistration: string;
  on_unhealthy: string;
}

export interface AwsAlbTargetGroupArgsTargetGroupHealthDnsFailover {
  minimum_healthy_targets_count?: string;
  minimum_healthy_targets_percentage?: string;
}

export interface AwsAlbTargetGroupArgsTargetGroupHealthUnhealthyStateRouting {
  minimum_healthy_targets_count?: number;
  minimum_healthy_targets_percentage?: string;
}

export interface AwsAlbTargetGroupArgsTargetGroupHealth {
  dns_failover: AwsAlbTargetGroupArgsTargetGroupHealthDnsFailover;
  unhealthy_state_routing: AwsAlbTargetGroupArgsTargetGroupHealthUnhealthyStateRouting;
}

export interface AwsAlbTargetGroupArgsTargetHealthState {
  enable_unhealthy_connection_termination: boolean;
  unhealthy_draining_interval?: number;
}

export interface AwsAlbTargetGroupArgs {
  deregistration_delay?: string;
  lambda_multi_value_headers_enabled?: boolean;
  port?: number;
  protocol?: string;
  proxy_protocol_v2?: boolean;
  slow_start?: number;
  tags?: { [key: string]: string };
  target_type?: string;
  vpc_id?: string;
  health_check: AwsAlbTargetGroupArgsHealthCheck;
  stickiness: AwsAlbTargetGroupArgsStickiness;
  target_failover: AwsAlbTargetGroupArgsTargetFailover;
  target_group_health: AwsAlbTargetGroupArgsTargetGroupHealth;
  target_health_state: AwsAlbTargetGroupArgsTargetHealthState;
}

export class aws_alb_target_group extends TerraformResource {
  readonly arn!: string;
  readonly arn_suffix!: string;
  readonly connection_termination?: boolean;
  readonly id?: string;
  readonly ip_address_type?: string;
  readonly load_balancer_arns!: string[];
  readonly load_balancing_algorithm_type?: string;
  readonly load_balancing_anomaly_mitigation?: string;
  readonly load_balancing_cross_zone_enabled?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly preserve_client_ip?: string;
  readonly protocol_version?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsAlbTargetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_alb_target_group");
  }
}
