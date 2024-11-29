import { TerraformConfig, TerraformResource } from "tfs";
export interface Matcher {
  value?: string;
}
export interface HealthCheck {
  enabled?: boolean;
  health_check_interval_seconds?: number;
  health_check_timeout_seconds?: number;
  healthy_threshold_count?: number;
  path?: string;
  protocol_version?: string;
  unhealthy_threshold_count?: number;
  matcher: Matcher;
}
export interface Config {
  vpc_identifier?: string;
  health_check: HealthCheck;
}
export interface Timeouts {
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
  config: Config;
  timeouts: Timeouts;
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