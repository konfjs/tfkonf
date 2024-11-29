import { TerraformConfig, TerraformResource } from "tfs";
export interface AdmissionWhitelistPatterns {
  name_pattern: string;
}
export interface ClusterAdmissionRules {
  cluster: string;
  enforcement_mode: string;
  evaluation_mode: string;
  require_attestations_by?: string[];
}
export interface DefaultAdmissionRule {
  enforcement_mode: string;
  evaluation_mode: string;
  require_attestations_by?: string[];
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBinaryAuthorizationPolicyArgs {
  description?: string;
  admission_whitelist_patterns: AdmissionWhitelistPatterns;
  cluster_admission_rules: ClusterAdmissionRules;
  default_admission_rule: DefaultAdmissionRule;
  timeouts: Timeouts;
}
export class google_binary_authorization_policy extends TerraformResource {
  readonly global_policy_evaluation_mode?: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBinaryAuthorizationPolicyArgs) {
    super(config, "resource", args, resourceName, "google_binary_authorization_policy");
  }
}