import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputpropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputproperties {
  name?: string;
  value_expression: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputpropertiesValueExpression;
}
export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput {
  properties: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputproperties;
}
export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigpredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}
export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfig {
  description?: string;
  recommendation: string;
  severity: string;
  custom_output: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput;
  predicate: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigpredicate;
  resource_selector: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector;
}
export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgs {
  display_name?: string;
  enablement_state?: string;
  location?: string;
  custom_config: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfig;
  timeouts: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgstimeouts;
}
export class google_scc_management_project_security_health_analytics_custom_module extends TerraformResource {
  readonly ancestor_module!: string;
  readonly id?: string;
  readonly last_editor!: string;
  readonly name!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgs) {
    super(config, "resource", args, resourceName, "google_scc_management_project_security_health_analytics_custom_module");
  }
}