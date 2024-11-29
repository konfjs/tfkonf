import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionConfiguration {
  key_id?: string;
  type: string;
}
export interface IpSet {
  definition: string[];
}
export interface RuleVariables {
  key: string;
  ip_set: IpSet;
}
export interface PolicyVariables {
  rule_variables: RuleVariables;
}
export interface StatefulEngineOptions {
  rule_order?: string;
  stream_exception_policy?: string;
}
export interface Override {
  action?: string;
}
export interface StatefulRuleGroupReference {
  priority?: number;
  resource_arn: string;
  override: Override;
}
export interface Dimension {
  value: string;
}
export interface PublishMetricAction {
  dimension: Dimension;
}
export interface ActionDefinition {
  publish_metric_action: PublishMetricAction;
}
export interface StatelessCustomAction {
  action_name: string;
  action_definition: ActionDefinition;
}
export interface StatelessRuleGroupReference {
  priority: number;
  resource_arn: string;
}
export interface FirewallPolicy {
  stateful_default_actions?: string[];
  stateless_default_actions: string[];
  stateless_fragment_default_actions: string[];
  tls_inspection_configuration_arn?: string;
  policy_variables: PolicyVariables;
  stateful_engine_options: StatefulEngineOptions;
  stateful_rule_group_reference: StatefulRuleGroupReference;
  stateless_custom_action: StatelessCustomAction;
  stateless_rule_group_reference: StatelessRuleGroupReference;
}
export interface AwsNetworkfirewallFirewallPolicyArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  encryption_configuration: EncryptionConfiguration;
  firewall_policy: FirewallPolicy;
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