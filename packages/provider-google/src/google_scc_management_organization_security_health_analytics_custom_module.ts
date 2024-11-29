import { TerraformConfig, TerraformResource } from "tfs";
export interface ValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface Properties {
  name?: string;
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
export interface CustomConfig {
  description?: string;
  recommendation: string;
  severity: string;
  custom_output: CustomOutput;
  predicate: Predicate;
  resource_selector: ResourceSelector;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgs {
  display_name?: string;
  enablement_state?: string;
  location?: string;
  organization: string;
  custom_config: CustomConfig;
  timeouts: Timeouts;
}
export class google_scc_management_organization_security_health_analytics_custom_module extends TerraformResource {
  readonly ancestor_module!: string;
  readonly id?: string;
  readonly last_editor!: string;
  readonly name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgs) {
    super(config, "resource", args, resourceName, "google_scc_management_organization_security_health_analytics_custom_module");
  }
}