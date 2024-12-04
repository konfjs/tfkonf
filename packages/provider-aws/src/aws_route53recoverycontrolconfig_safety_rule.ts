import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53recoverycontrolconfigSafetyRuleArgsRuleConfig {
  inverted: boolean;
  threshold: number;
  type: string;
}

export interface AwsRoute53recoverycontrolconfigSafetyRuleArgs {
  asserted_controls?: string[];
  control_panel_arn: string;
  gating_controls?: string[];
  name: string;
  target_controls?: string[];
  wait_period_ms: number;
  rule_config: AwsRoute53recoverycontrolconfigSafetyRuleArgsRuleConfig;
}

export class aws_route53recoverycontrolconfig_safety_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53recoverycontrolconfigSafetyRuleArgs) {
    super(config, "resource", args, resourceName, "aws_route53recoverycontrolconfig_safety_rule");
  }
}
