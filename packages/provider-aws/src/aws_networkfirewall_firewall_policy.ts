import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsNetworkfirewallFirewallPolicyArgsEncryptionConfiguration {
  key_id?: string;
  type: string;
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyPolicyVariablesRuleVariablesIpSet {
  definition: string[];
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyPolicyVariablesRuleVariables {
  key: string;
  ip_set: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyPolicyVariablesRuleVariablesIpSet;
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyPolicyVariables {
  rule_variables: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyPolicyVariablesRuleVariables;
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatefulEngineOptions {
  rule_order?: string;
  stream_exception_policy?: string;
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatefulRuleGroupReferenceOverride {
  action?: string;
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatefulRuleGroupReference {
  priority?: number;
  resource_arn: string;
  override: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatefulRuleGroupReferenceOverride;
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {
  value: string;
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {
  dimension: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension;
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatelessCustomActionActionDefinition {
  publish_metric_action: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction;
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatelessCustomAction {
  action_name: string;
  action_definition: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatelessCustomActionActionDefinition;
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatelessRuleGroupReference {
  priority: number;
  resource_arn: string;
}
export interface AwsNetworkfirewallFirewallPolicyArgsFirewallPolicy {
  stateful_default_actions?: string[];
  stateless_default_actions: string[];
  stateless_fragment_default_actions: string[];
  tls_inspection_configuration_arn?: string;
  policy_variables: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyPolicyVariables;
  stateful_engine_options: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatefulEngineOptions;
  stateful_rule_group_reference: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatefulRuleGroupReference;
  stateless_custom_action: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatelessCustomAction;
  stateless_rule_group_reference: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicyStatelessRuleGroupReference;
}
export interface AwsNetworkfirewallFirewallPolicyArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  encryption_configuration: AwsNetworkfirewallFirewallPolicyArgsEncryptionConfiguration;
  firewall_policy: AwsNetworkfirewallFirewallPolicyArgsFirewallPolicy;
}
export class aws_networkfirewall_firewall_policy extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly update_token!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkfirewallFirewallPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_networkfirewall_firewall_policy");
  }
}