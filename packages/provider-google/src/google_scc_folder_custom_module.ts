import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputProperties {
  name?: string;
  value_expression: GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression;
}
export interface GoogleSccFolderCustomModuleArgsCustomConfigCustomOutput {
  properties: GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputProperties;
}
export interface GoogleSccFolderCustomModuleArgsCustomConfigPredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccFolderCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}
export interface GoogleSccFolderCustomModuleArgsCustomConfig {
  description?: string;
  recommendation: string;
  severity: string;
  custom_output: GoogleSccFolderCustomModuleArgsCustomConfigCustomOutput;
  predicate: GoogleSccFolderCustomModuleArgsCustomConfigPredicate;
  resource_selector: GoogleSccFolderCustomModuleArgsCustomConfigResourceSelector;
}
export interface GoogleSccFolderCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccFolderCustomModuleArgs {
  display_name: string;
  enablement_state: string;
  folder: string;
  custom_config: GoogleSccFolderCustomModuleArgsCustomConfig;
  timeouts?: GoogleSccFolderCustomModuleArgsTimeouts;
}
export class google_scc_folder_custom_module extends TerraformResource {
  readonly ancestor_module!: string;
  readonly id?: string;
  readonly last_editor!: string;
  readonly name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccFolderCustomModuleArgs) {
    super(config, "resource", args, resourceName, "google_scc_folder_custom_module");
  }
}