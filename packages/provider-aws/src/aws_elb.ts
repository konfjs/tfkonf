import { TerraformConfig, TerraformResource } from "tfs";
export interface AccessLogs {
  bucket: string;
  bucket_prefix?: string;
  enabled?: boolean;
  interval?: number;
}
export interface HealthCheck {
  healthy_threshold: number;
  interval: number;
  target: string;
  timeout: number;
  unhealthy_threshold: number;
}
export interface Listener {
  instance_port: number;
  instance_protocol: string;
  lb_port: number;
  lb_protocol: string;
  ssl_certificate_id?: string;
}
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsElbArgs {
  connection_draining?: boolean;
  connection_draining_timeout?: number;
  cross_zone_load_balancing?: boolean;
  desync_mitigation_mode?: string;
  idle_timeout?: number;
  tags?: {
    [key: string]: string;
  };
  access_logs: AccessLogs;
  health_check: HealthCheck;
  listener: Listener;
  timeouts: Timeouts;
}
export class aws_elb extends TerraformResource {
  readonly arn!: string;
  readonly availability_zones?: string[];
  readonly dns_name!: string;
  readonly id?: string;
  readonly instances?: string[];
  readonly internal?: boolean;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly security_groups?: string[];
  readonly source_security_group?: string;
  readonly source_security_group_id!: string;
  readonly subnets?: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly zone_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElbArgs) {
    super(config, "resource", args, resourceName, "aws_elb");
  }
}