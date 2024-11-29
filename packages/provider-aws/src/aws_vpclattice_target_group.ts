import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpclatticeTargetGroupArgsconfigHealthCheckmatcher {
  value?: string;
}
export interface AwsVpclatticeTargetGroupArgsconfigHealthCheck {
  enabled?: boolean;
  health_check_interval_seconds?: number;
  health_check_timeout_seconds?: number;
  healthy_threshold_count?: number;
  path?: string;
  protocol_version?: string;
  unhealthy_threshold_count?: number;
  matcher: AwsVpclatticeTargetGroupArgsconfigHealthCheckmatcher;
}
export interface AwsVpclatticeTargetGroupArgsconfig {
  vpc_identifier?: string;
  health_check: AwsVpclatticeTargetGroupArgsconfigHealthCheck;
}
export interface AwsVpclatticeTargetGroupArgstimeouts {
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
  config: AwsVpclatticeTargetGroupArgsconfig;
  timeouts: AwsVpclatticeTargetGroupArgstimeouts;
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