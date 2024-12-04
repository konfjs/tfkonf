import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53HealthCheckArgs {
  child_health_threshold?: number;
  child_healthchecks?: string[];
  cloudwatch_alarm_name?: string;
  cloudwatch_alarm_region?: string;
  disabled?: boolean;
  fqdn?: string;
  insufficient_data_health_status?: string;
  invert_healthcheck?: boolean;
  ip_address?: string;
  measure_latency?: boolean;
  port?: number;
  reference_name?: string;
  regions?: string[];
  request_interval?: number;
  resource_path?: string;
  routing_control_arn?: string;
  search_string?: string;
  tags?: { [key: string]: string };
  type: string;
}

export class aws_route53_health_check extends TerraformResource {
  readonly arn!: string;
  readonly enable_sni?: boolean;
  readonly failure_threshold?: number;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53HealthCheckArgs) {
    super(config, "resource", args, resourceName, "aws_route53_health_check");
  }
}
