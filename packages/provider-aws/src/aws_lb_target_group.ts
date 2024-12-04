import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbTargetGroupArgsHealthCheck {
  enabled?: boolean;
  healthy_threshold?: number;
  interval?: number;
  port?: string;
  protocol?: string;
  unhealthy_threshold?: number;
}

export interface AwsLbTargetGroupArgsStickiness {
  cookie_duration?: number;
  cookie_name?: string;
  enabled?: boolean;
  type: string;
}

export interface AwsLbTargetGroupArgsTargetFailover {
  on_deregistration: string;
  on_unhealthy: string;
}

export interface AwsLbTargetGroupArgsTargetGroupHealthDnsFailover {
  minimum_healthy_targets_count?: string;
  minimum_healthy_targets_percentage?: string;
}

export interface AwsLbTargetGroupArgsTargetGroupHealthUnhealthyStateRouting {
  minimum_healthy_targets_count?: number;
  minimum_healthy_targets_percentage?: string;
}

export interface AwsLbTargetGroupArgsTargetGroupHealth {
  dns_failover: AwsLbTargetGroupArgsTargetGroupHealthDnsFailover;
  unhealthy_state_routing: AwsLbTargetGroupArgsTargetGroupHealthUnhealthyStateRouting;
}

export interface AwsLbTargetGroupArgsTargetHealthState {
  enable_unhealthy_connection_termination: boolean;
  unhealthy_draining_interval?: number;
}

export interface AwsLbTargetGroupArgs {
  deregistration_delay?: string;
  lambda_multi_value_headers_enabled?: boolean;
  port?: number;
  protocol?: string;
  proxy_protocol_v2?: boolean;
  slow_start?: number;
  tags?: { [key: string]: string };
  target_type?: string;
  vpc_id?: string;
  health_check: AwsLbTargetGroupArgsHealthCheck;
  stickiness: AwsLbTargetGroupArgsStickiness;
  target_failover: AwsLbTargetGroupArgsTargetFailover;
  target_group_health: AwsLbTargetGroupArgsTargetGroupHealth;
  target_health_state: AwsLbTargetGroupArgsTargetHealthState;
}

export class aws_lb_target_group extends TerraformResource {
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

  constructor(config: TerraformConfig, resourceName: string, args: AwsLbTargetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_lb_target_group");
  }
}
