import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputpropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputproperties {
  name?: string;
  value_expression: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputpropertiesValueExpression;
}
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput {
  properties: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputproperties;
}
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigpredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfig {
  description?: string;
  recommendation?: string;
  severity?: string;
  custom_output: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput;
  predicate: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigpredicate;
  resource_selector: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector;
}
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgs {
  display_name?: string;
  enablement_state?: string;
  folder: string;
  location?: string;
  custom_config: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfig;
  timeouts: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgstimeouts;
}
export class google_scc_management_folder_security_health_analytics_custom_module extends TerraformResource {
  readonly ancestor_module!: string;
  readonly id?: string;
  readonly last_editor!: string;
  readonly name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgs) {
    super(config, "resource", args, resourceName, "google_scc_management_folder_security_health_analytics_custom_module");
  }
}