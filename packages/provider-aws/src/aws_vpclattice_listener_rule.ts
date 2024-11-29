import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpclatticeListenerRuleArgsactionFixedResponse {
  status_code: number;
}
export interface AwsVpclatticeListenerRuleArgsactionforwardTargetGroups {
  target_group_identifier: string;
  weight?: number;
}
export interface AwsVpclatticeListenerRuleArgsactionforward {
  target_groups: AwsVpclatticeListenerRuleArgsactionforwardTargetGroups;
}
export interface AwsVpclatticeListenerRuleArgsaction {
  fixed_response: AwsVpclatticeListenerRuleArgsactionFixedResponse;
  forward: AwsVpclatticeListenerRuleArgsactionforward;
}
export interface AwsVpclatticeListenerRuleArgsmatchHttpMatchHeaderMatchesmatch {
  contains?: string;
  exact?: string;
  prefix?: string;
}
export interface AwsVpclatticeListenerRuleArgsmatchHttpMatchHeaderMatches {
  case_sensitive?: boolean;
  name: string;
  match: AwsVpclatticeListenerRuleArgsmatchHttpMatchHeaderMatchesmatch;
}
export interface AwsVpclatticeListenerRuleArgsmatchHttpMatchPathMatchmatch {
  exact?: string;
  prefix?: string;
}
export interface AwsVpclatticeListenerRuleArgsmatchHttpMatchPathMatch {
  case_sensitive?: boolean;
  match: AwsVpclatticeListenerRuleArgsmatchHttpMatchPathMatchmatch;
}
export interface AwsVpclatticeListenerRuleArgsmatchHttpMatch {
  method?: string;
  header_matches: AwsVpclatticeListenerRuleArgsmatchHttpMatchHeaderMatches;
  path_match: AwsVpclatticeListenerRuleArgsmatchHttpMatchPathMatch;
}
export interface AwsVpclatticeListenerRuleArgsmatch {
  http_match: AwsVpclatticeListenerRuleArgsmatchHttpMatch;
}
export interface AwsVpclatticeListenerRuleArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpclatticeListenerRuleArgs {
  listener_identifier: string;
  name: string;
  priority: number;
  service_identifier: string;
  tags?: {
    [key: string]: string;
  };
  action: AwsVpclatticeListenerRuleArgsaction;
  match: AwsVpclatticeListenerRuleArgsmatch;
  timeouts: AwsVpclatticeListenerRuleArgstimeouts;
}
export class aws_vpclattice_listener_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly rule_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeListenerRuleArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_listener_rule");
  }
}