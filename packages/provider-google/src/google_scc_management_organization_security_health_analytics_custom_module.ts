import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputpropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputproperties {
  name?: string;
  value_expression: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputpropertiesValueExpression;
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput {
  properties: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputproperties;
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigpredicate {
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
  predicate: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigpredicate;
  resource_selector: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector;
}
export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgstimeouts {
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
  timeouts: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgstimeouts;
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