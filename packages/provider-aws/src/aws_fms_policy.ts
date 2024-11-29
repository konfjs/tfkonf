import { TerraformConfig, TerraformResource } from "tfs";
export interface ExcludeMap {
  account?: string[];
  orgunit?: string[];
}
export interface IncludeMap {
  account?: string[];
  orgunit?: string[];
}
export interface NetworkFirewallPolicy {
  firewall_deployment_model?: string;
}
export interface ThirdPartyFirewallPolicy {
  firewall_deployment_model?: string;
}
export interface PolicyOption {
  network_firewall_policy: NetworkFirewallPolicy;
  third_party_firewall_policy: ThirdPartyFirewallPolicy;
}
export interface SecurityServicePolicyData {
  managed_service_data?: string;
  type: string;
  policy_option: PolicyOption;
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
  exclude_map: ExcludeMap;
  include_map: IncludeMap;
  security_service_policy_data: SecurityServicePolicyData;
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