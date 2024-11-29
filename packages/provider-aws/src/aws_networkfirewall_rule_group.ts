import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionConfiguration {
  key_id?: string;
  type: string;
}
export interface IpSetReference {
  reference_arn: string;
}
export interface IpSetReferences {
  key: string;
  ip_set_reference: IpSetReference;
}
export interface ReferenceSets {
  ip_set_references: IpSetReferences;
}
export interface IpSet {
  definition: string[];
}
export interface IpSets {
  key: string;
  ip_set: IpSet;
}
export interface PortSet {
  definition: string[];
}
export interface PortSets {
  key: string;
  port_set: PortSet;
}
export interface RuleVariables {
  ip_sets: IpSets;
  port_sets: PortSets;
}
export interface RulesSourceList {
  generated_rules_type: string;
  target_types: string[];
  targets: string[];
}
export interface Header {
  destination: string;
  destination_port: string;
  direction: string;
  protocol: string;
  source: string;
  source_port: string;
}
export interface RuleOption {
  keyword: string;
  settings?: string[];
}
export interface StatefulRule {
  action: string;
  header: Header;
  rule_option: RuleOption;
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
export interface CustomAction {
  action_name: string;
  action_definition: ActionDefinition;
}
export interface Destination {
  address_definition: string;
}
export interface DestinationPort {
  from_port: number;
  to_port?: number;
}
export interface Source {
  address_definition: string;
}
export interface SourcePort {
  from_port: number;
  to_port?: number;
}
export interface TcpFlag {
  flags: string[];
  masks?: string[];
}
export interface MatchAttributes {
  protocols?: number[];
  destination: Destination;
  destination_port: DestinationPort;
  source: Source;
  source_port: SourcePort;
  tcp_flag: TcpFlag;
}
export interface RuleDefinition {
  actions: string[];
  match_attributes: MatchAttributes;
}
export interface StatelessRule {
  priority: number;
  rule_definition: RuleDefinition;
}
export interface StatelessRulesAndCustomActions {
  custom_action: CustomAction;
  stateless_rule: StatelessRule;
}
export interface RulesSource {
  rules_string?: string;
  rules_source_list: RulesSourceList;
  stateful_rule: StatefulRule;
  stateless_rules_and_custom_actions: StatelessRulesAndCustomActions;
}
export interface StatefulRuleOptions {
  rule_order: string;
}
export interface RuleGroup {
  reference_sets: ReferenceSets;
  rule_variables: RuleVariables;
  rules_source: RulesSource;
  stateful_rule_options: StatefulRuleOptions;
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
  encryption_configuration: EncryptionConfiguration;
  rule_group: RuleGroup;
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