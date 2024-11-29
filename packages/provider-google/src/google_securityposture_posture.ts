import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesComplianceStandards {
  control?: string;
  standard?: string;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintPolicyRulescondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintPolicyRulesvalues {
  allowed_values?: string[];
  denied_values?: string[];
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintPolicyRules {
  allow_all?: boolean;
  deny_all?: boolean;
  enforce?: boolean;
  condition: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintPolicyRulescondition;
  values: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintPolicyRulesvalues;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraint {
  canned_constraint_id: string;
  policy_rules: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintPolicyRules;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintCustomCustomConstraint {
  action_type: string;
  condition: string;
  description?: string;
  display_name?: string;
  method_types: string[];
  name: string;
  resource_types: string[];
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintCustomPolicyRulescondition {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintCustomPolicyRulesvalues {
  allowed_values?: string[];
  denied_values?: string[];
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintCustomPolicyRules {
  allow_all?: boolean;
  deny_all?: boolean;
  enforce?: boolean;
  condition: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintCustomPolicyRulescondition;
  values: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintCustomPolicyRulesvalues;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintCustom {
  custom_constraint: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintCustomCustomConstraint;
  policy_rules: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintCustomPolicyRules;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfigCustomOutputpropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfigCustomOutputproperties {
  name: string;
  value_expression: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfigCustomOutputpropertiesValueExpression;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfigCustomOutput {
  properties: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfigCustomOutputproperties;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfigpredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfigResourceSelector {
  resource_types: string[];
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfig {
  description?: string;
  recommendation?: string;
  severity: string;
  custom_output: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfigCustomOutput;
  predicate: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfigpredicate;
  resource_selector: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfigResourceSelector;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModule {
  display_name?: string;
  module_enablement_state?: string;
  config: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModuleconfig;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsModule {
  module_enablement_state?: string;
  module_name: string;
}
export interface GoogleSecurityposturePostureArgsPolicySetspoliciesconstraint {
  org_policy_constraint: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraint;
  org_policy_constraint_custom: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintOrgPolicyConstraintCustom;
  security_health_analytics_custom_module: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsCustomModule;
  security_health_analytics_module: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraintSecurityHealthAnalyticsModule;
}
export interface GoogleSecurityposturePostureArgsPolicySetspolicies {
  description?: string;
  policy_id: string;
  compliance_standards: GoogleSecurityposturePostureArgsPolicySetspoliciesComplianceStandards;
  constraint: GoogleSecurityposturePostureArgsPolicySetspoliciesconstraint;
}
export interface GoogleSecurityposturePostureArgsPolicySets {
  description?: string;
  policy_set_id: string;
  policies: GoogleSecurityposturePostureArgsPolicySetspolicies;
}
export interface GoogleSecurityposturePostureArgstimeouts {
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
  policy_sets: GoogleSecurityposturePostureArgsPolicySets;
  timeouts: GoogleSecurityposturePostureArgstimeouts;
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