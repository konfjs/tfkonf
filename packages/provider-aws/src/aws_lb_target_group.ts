import { TerraformConfig, TerraformResource } from "tfs";
export interface HealthCheck {
  enabled?: boolean;
  healthy_threshold?: number;
  interval?: number;
  port?: string;
  protocol?: string;
  unhealthy_threshold?: number;
}
export interface Stickiness {
  cookie_duration?: number;
  cookie_name?: string;
  enabled?: boolean;
  type: string;
}
export interface TargetFailover {
  on_deregistration: string;
  on_unhealthy: string;
}
export interface DnsFailover {
  minimum_healthy_targets_count?: string;
  minimum_healthy_targets_percentage?: string;
}
export interface UnhealthyStateRouting {
  minimum_healthy_targets_count?: number;
  minimum_healthy_targets_percentage?: string;
}
export interface TargetGroupHealth {
  dns_failover: DnsFailover;
  unhealthy_state_routing: UnhealthyStateRouting;
}
export interface TargetHealthState {
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
  tags?: {
    [key: string]: string;
  };
  target_type?: string;
  vpc_id?: string;
  health_check: HealthCheck;
  stickiness: Stickiness;
  target_failover: TargetFailover;
  target_group_health: TargetGroupHealth;
  target_health_state: TargetHealthState;
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
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsLbTargetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_lb_target_group");
  }
}