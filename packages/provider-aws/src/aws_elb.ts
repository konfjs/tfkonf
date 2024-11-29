import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsElbArgsAccessLogs {
  bucket: string;
  bucket_prefix?: string;
  enabled?: boolean;
  interval?: number;
}
export interface AwsElbArgsHealthCheck {
  healthy_threshold: number;
  interval: number;
  target: string;
  timeout: number;
  unhealthy_threshold: number;
}
export interface AwsElbArgsListener {
  instance_port: number;
  instance_protocol: string;
  lb_port: number;
  lb_protocol: string;
  ssl_certificate_id?: string;
}
export interface AwsElbArgsTimeouts {
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
  access_logs: AwsElbArgsAccessLogs;
  health_check: AwsElbArgsHealthCheck;
  listener: AwsElbArgsListener;
  timeouts: AwsElbArgsTimeouts;
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