import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputpropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputproperties {
  name?: string;
  value_expression: GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputpropertiesValueExpression;
}
export interface GoogleSccFolderCustomModuleArgsCustomConfigCustomOutput {
  properties: GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputproperties;
}
export interface GoogleSccFolderCustomModuleArgsCustomConfigpredicate {
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
  predicate: GoogleSccFolderCustomModuleArgsCustomConfigpredicate;
  resource_selector: GoogleSccFolderCustomModuleArgsCustomConfigResourceSelector;
}
export interface GoogleSccFolderCustomModuleArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccFolderCustomModuleArgs {
  display_name: string;
  enablement_state: string;
  folder: string;
  custom_config: GoogleSccFolderCustomModuleArgsCustomConfig;
  timeouts: GoogleSccFolderCustomModuleArgstimeouts;
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