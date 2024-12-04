import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpclatticeListenerRuleArgsActionFixedResponse {
  status_code: number;
}

export interface AwsVpclatticeListenerRuleArgsActionForwardTargetGroups {
  target_group_identifier: string;
  weight?: number;
}

export interface AwsVpclatticeListenerRuleArgsActionForward {
  target_groups: AwsVpclatticeListenerRuleArgsActionForwardTargetGroups;
}

export interface AwsVpclatticeListenerRuleArgsAction {
  fixed_response: AwsVpclatticeListenerRuleArgsActionFixedResponse;
  forward: AwsVpclatticeListenerRuleArgsActionForward;
}

export interface AwsVpclatticeListenerRuleArgsMatchHttpMatchHeaderMatchesMatch {
  contains?: string;
  exact?: string;
  prefix?: string;
}

export interface AwsVpclatticeListenerRuleArgsMatchHttpMatchHeaderMatches {
  case_sensitive?: boolean;
  name: string;
  match: AwsVpclatticeListenerRuleArgsMatchHttpMatchHeaderMatchesMatch;
}

export interface AwsVpclatticeListenerRuleArgsMatchHttpMatchPathMatchMatch {
  exact?: string;
  prefix?: string;
}

export interface AwsVpclatticeListenerRuleArgsMatchHttpMatchPathMatch {
  case_sensitive?: boolean;
  match: AwsVpclatticeListenerRuleArgsMatchHttpMatchPathMatchMatch;
}

export interface AwsVpclatticeListenerRuleArgsMatchHttpMatch {
  method?: string;
  header_matches: AwsVpclatticeListenerRuleArgsMatchHttpMatchHeaderMatches;
  path_match: AwsVpclatticeListenerRuleArgsMatchHttpMatchPathMatch;
}

export interface AwsVpclatticeListenerRuleArgsMatch {
  http_match: AwsVpclatticeListenerRuleArgsMatchHttpMatch;
}

export interface AwsVpclatticeListenerRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpclatticeListenerRuleArgs {
  listener_identifier: string;
  name: string;
  priority: number;
  service_identifier: string;
  tags?: { [key: string]: string };
  action: AwsVpclatticeListenerRuleArgsAction;
  match: AwsVpclatticeListenerRuleArgsMatch;
  timeouts?: AwsVpclatticeListenerRuleArgsTimeouts;
}

export class aws_vpclattice_listener_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly rule_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeListenerRuleArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_listener_rule");
  }
}
