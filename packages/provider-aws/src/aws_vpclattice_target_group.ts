import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpclatticeTargetGroupArgsConfigHealthCheckMatcher {
  value?: string;
}
export interface AwsVpclatticeTargetGroupArgsConfigHealthCheck {
  enabled?: boolean;
  health_check_interval_seconds?: number;
  health_check_timeout_seconds?: number;
  healthy_threshold_count?: number;
  path?: string;
  protocol_version?: string;
  unhealthy_threshold_count?: number;
  matcher: AwsVpclatticeTargetGroupArgsConfigHealthCheckMatcher;
}
export interface AwsVpclatticeTargetGroupArgsConfig {
  vpc_identifier?: string;
  health_check: AwsVpclatticeTargetGroupArgsConfigHealthCheck;
}
export interface AwsVpclatticeTargetGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpclatticeTargetGroupArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  config: AwsVpclatticeTargetGroupArgsConfig;
  timeouts: AwsVpclatticeTargetGroupArgsTimeouts;
}
export class aws_vpclattice_target_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeTargetGroupArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_target_group");
  }
}