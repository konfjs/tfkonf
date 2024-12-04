import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBinaryAuthorizationPolicyArgsAdmissionWhitelistPatterns {
  name_pattern: string;
}

export interface GoogleBinaryAuthorizationPolicyArgsClusterAdmissionRules {
  cluster: string;
  enforcement_mode: string;
  evaluation_mode: string;
  require_attestations_by?: string[];
}

export interface GoogleBinaryAuthorizationPolicyArgsDefaultAdmissionRule {
  enforcement_mode: string;
  evaluation_mode: string;
  require_attestations_by?: string[];
}

export interface GoogleBinaryAuthorizationPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBinaryAuthorizationPolicyArgs {
  description?: string;
  admission_whitelist_patterns: GoogleBinaryAuthorizationPolicyArgsAdmissionWhitelistPatterns;
  cluster_admission_rules: GoogleBinaryAuthorizationPolicyArgsClusterAdmissionRules;
  default_admission_rule: GoogleBinaryAuthorizationPolicyArgsDefaultAdmissionRule;
  timeouts?: GoogleBinaryAuthorizationPolicyArgsTimeouts;
}

export class google_binary_authorization_policy extends TerraformResource {
  readonly global_policy_evaluation_mode?: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleBinaryAuthorizationPolicyArgs) {
    super(config, "resource", args, resourceName, "google_binary_authorization_policy");
  }
}
