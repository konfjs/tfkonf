import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputProperties {
  name?: string;
  value_expression: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression;
}
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput {
  properties: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputProperties;
}
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigPredicate {
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
  predicate: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigPredicate;
  resource_selector: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector;
}
export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsTimeouts {
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
  timeouts?: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsTimeouts;
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