import { TerraformConfig, TerraformResource } from "tfs";
export interface ComplianceStandards {
  control?: string;
  standard?: string;
}
export interface Condition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface Values {
  allowed_values?: string[];
  denied_values?: string[];
}
export interface PolicyRules {
  allow_all?: boolean;
  deny_all?: boolean;
  enforce?: boolean;
  condition: Condition;
  values: Values;
}
export interface OrgPolicyConstraint {
  canned_constraint_id: string;
  policy_rules: PolicyRules;
}
export interface CustomConstraint {
  action_type: string;
  condition: string;
  description?: string;
  display_name?: string;
  method_types: string[];
  name: string;
  resource_types: string[];
}
export interface Condition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface Values {
  allowed_values?: string[];
  denied_values?: string[];
}
export interface PolicyRules {
  allow_all?: boolean;
  deny_all?: boolean;
  enforce?: boolean;
  condition: Condition;
  values: Values;
}
export interface OrgPolicyConstraintCustom {
  custom_constraint: CustomConstraint;
  policy_rules: PolicyRules;
}
export interface ValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface Properties {
  name: string;
  value_expression: ValueExpression;
}
export interface CustomOutput {
  properties: Properties;
}
export interface Predicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface ResourceSelector {
  resource_types: string[];
}
export interface Config {
  description?: string;
  recommendation?: string;
  severity: string;
  custom_output: CustomOutput;
  predicate: Predicate;
  resource_selector: ResourceSelector;
}
export interface SecurityHealthAnalyticsCustomModule {
  display_name?: string;
  module_enablement_state?: string;
  config: Config;
}
export interface SecurityHealthAnalyticsModule {
  module_enablement_state?: string;
  module_name: string;
}
export interface Constraint {
  org_policy_constraint: OrgPolicyConstraint;
  org_policy_constraint_custom: OrgPolicyConstraintCustom;
  security_health_analytics_custom_module: SecurityHealthAnalyticsCustomModule;
  security_health_analytics_module: SecurityHealthAnalyticsModule;
}
export interface Policies {
  description?: string;
  policy_id: string;
  compliance_standards: ComplianceStandards;
  constraint: Constraint;
}
export interface PolicySets {
  description?: string;
  policy_set_id: string;
  policies: Policies;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSecurityposturePostureArgs {
  description?: string;
  location: string;
  parent: string;
  posture_id: string;
  state: string;
  policy_sets: PolicySets;
  timeouts: Timeouts;
}
export class google_securityposture_posture extends TerraformResource {
  readonly create_time!: string;
  readonly etag!: string;
  readonly id?: string;
  readonly name!: string;
  readonly reconciling!: boolean;
  readonly revision_id!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecurityposturePostureArgs) {
    super(config, "resource", args, resourceName, "google_securityposture_posture");
  }
}