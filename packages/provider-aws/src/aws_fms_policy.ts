import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsFmsPolicyArgsExcludeMap {
  account?: string[];
  orgunit?: string[];
}
export interface AwsFmsPolicyArgsIncludeMap {
  account?: string[];
  orgunit?: string[];
}
export interface AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy {
  firewall_deployment_model?: string;
}
export interface AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy {
  firewall_deployment_model?: string;
}
export interface AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOption {
  network_firewall_policy: AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy;
  third_party_firewall_policy: AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy;
}
export interface AwsFmsPolicyArgsSecurityServicePolicyData {
  managed_service_data?: string;
  type: string;
  policy_option: AwsFmsPolicyArgsSecurityServicePolicyDataPolicyOption;
}
export interface AwsFmsPolicyArgs {
  delete_all_policy_resources?: boolean;
  delete_unused_fm_managed_resources?: boolean;
  description?: string;
  exclude_resource_tags: boolean;
  name: string;
  remediation_enabled?: boolean;
  resource_tags?: {
    [key: string]: string;
  };
  tags?: {
    [key: string]: string;
  };
  exclude_map: AwsFmsPolicyArgsExcludeMap;
  include_map: AwsFmsPolicyArgsIncludeMap;
  security_service_policy_data: AwsFmsPolicyArgsSecurityServicePolicyData;
}
export class aws_fms_policy extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly policy_update_token!: string;
  readonly resource_set_ids?: string[];
  readonly resource_type?: string;
  readonly resource_type_list?: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFmsPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_fms_policy");
  }
}