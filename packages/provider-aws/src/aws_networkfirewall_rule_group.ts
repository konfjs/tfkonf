import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsNetworkfirewallRuleGroupArgsEncryptionConfiguration {
  key_id?: string;
  type: string;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSetsIpSetReferencesIpSetReference {
  reference_arn: string;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSetsIpSetReferences {
  key: string;
  ip_set_reference: AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSetsIpSetReferencesIpSetReference;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSets {
  ip_set_references: AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSetsIpSetReferences;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesIpSetsIpSet {
  definition: string[];
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesIpSets {
  key: string;
  ip_set: AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesIpSetsIpSet;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesPortSetsPortSet {
  definition: string[];
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesPortSets {
  key: string;
  port_set: AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesPortSetsPortSet;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariables {
  ip_sets: AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesIpSets;
  port_sets: AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariablesPortSets;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceRulesSourceList {
  generated_rules_type: string;
  target_types: string[];
  targets: string[];
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRuleHeader {
  destination: string;
  destination_port: string;
  direction: string;
  protocol: string;
  source: string;
  source_port: string;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRuleRuleOption {
  keyword: string;
  settings?: string[];
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRule {
  action: string;
  header: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRuleHeader;
  rule_option: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRuleRuleOption;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension {
  value: string;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction {
  dimension: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition {
  publish_metric_action: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction {
  action_name: string;
  action_definition: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination {
  address_definition: string;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort {
  from_port: number;
  to_port?: number;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource {
  address_definition: string;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort {
  from_port: number;
  to_port?: number;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag {
  flags: string[];
  masks?: string[];
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes {
  protocols?: number[];
  destination: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination;
  destination_port: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort;
  source: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource;
  source_port: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort;
  tcp_flag: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition {
  actions: string[];
  match_attributes: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule {
  priority: number;
  rule_definition: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActions {
  custom_action: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction;
  stateless_rule: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSource {
  rules_string?: string;
  rules_source_list: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceRulesSourceList;
  stateful_rule: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatefulRule;
  stateless_rules_and_custom_actions: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSourceStatelessRulesAndCustomActions;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroupStatefulRuleOptions {
  rule_order: string;
}
export interface AwsNetworkfirewallRuleGroupArgsRuleGroup {
  reference_sets: AwsNetworkfirewallRuleGroupArgsRuleGroupReferenceSets;
  rule_variables: AwsNetworkfirewallRuleGroupArgsRuleGroupRuleVariables;
  rules_source: AwsNetworkfirewallRuleGroupArgsRuleGroupRulesSource;
  stateful_rule_options: AwsNetworkfirewallRuleGroupArgsRuleGroupStatefulRuleOptions;
}
export interface AwsNetworkfirewallRuleGroupArgs {
  capacity: number;
  description?: string;
  name: string;
  rules?: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  encryption_configuration: AwsNetworkfirewallRuleGroupArgsEncryptionConfiguration;
  rule_group: AwsNetworkfirewallRuleGroupArgsRuleGroup;
}
export class aws_networkfirewall_rule_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly update_token!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkfirewallRuleGroupArgs) {
    super(config, "resource", args, resourceName, "aws_networkfirewall_rule_group");
  }
}