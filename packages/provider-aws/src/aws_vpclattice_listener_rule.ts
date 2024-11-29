import { TerraformConfig, TerraformResource } from "tfs";
export interface FixedResponse {
  status_code: number;
}
export interface TargetGroups {
  target_group_identifier: string;
  weight?: number;
}
export interface Forward {
  target_groups: TargetGroups;
}
export interface Action {
  fixed_response: FixedResponse;
  forward: Forward;
}
export interface Match {
  contains?: string;
  exact?: string;
  prefix?: string;
}
export interface HeaderMatches {
  case_sensitive?: boolean;
  name: string;
  match: Match;
}
export interface Match {
  exact?: string;
  prefix?: string;
}
export interface PathMatch {
  case_sensitive?: boolean;
  match: Match;
}
export interface HttpMatch {
  method?: string;
  header_matches: HeaderMatches;
  path_match: PathMatch;
}
export interface Match {
  http_match: HttpMatch;
}
export interface Timeouts {
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
  action: Action;
  match: Match;
  timeouts: Timeouts;
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