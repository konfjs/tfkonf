import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputProperties {
  name?: string;
  value_expression: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression;
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput {
  properties: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputProperties;
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigPredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfig {
  description?: string;
  recommendation: string;
  severity: string;
  custom_output: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput;
  predicate: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigPredicate;
  resource_selector: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector;
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgs {
  display_name?: string;
  enablement_state?: string;
  location?: string;
  organization: string;
  custom_config: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfig;
  timeouts: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsTimeouts;
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