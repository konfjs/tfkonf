import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleSccProjectCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccProjectCustomModuleArgsCustomConfigCustomOutputProperties {
  name?: string;
  value_expression: GoogleSccProjectCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression;
}
export interface GoogleSccProjectCustomModuleArgsCustomConfigCustomOutput {
  properties: GoogleSccProjectCustomModuleArgsCustomConfigCustomOutputProperties;
}
export interface GoogleSccProjectCustomModuleArgsCustomConfigPredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccProjectCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}
export interface GoogleSccProjectCustomModuleArgsCustomConfig {
  description?: string;
  recommendation: string;
  severity: string;
  custom_output: GoogleSccProjectCustomModuleArgsCustomConfigCustomOutput;
  predicate: GoogleSccProjectCustomModuleArgsCustomConfigPredicate;
  resource_selector: GoogleSccProjectCustomModuleArgsCustomConfigResourceSelector;
}
export interface GoogleSccProjectCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccProjectCustomModuleArgs {
  display_name: string;
  enablement_state: string;
  custom_config: GoogleSccProjectCustomModuleArgsCustomConfig;
  timeouts?: GoogleSccProjectCustomModuleArgsTimeouts;
}
export class google_scc_project_custom_module extends TerraformResource {
  readonly ancestor_module!: string;
  readonly id?: string;
  readonly last_editor!: string;
  readonly name!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccProjectCustomModuleArgs) {
    super(config, "resource", args, resourceName, "google_scc_project_custom_module");
  }
}