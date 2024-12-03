import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputProperties {
  name?: string;
  value_expression: GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression;
}
export interface GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutput {
  properties: GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputProperties;
}
export interface GoogleSccOrganizationCustomModuleArgsCustomConfigPredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccOrganizationCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}
export interface GoogleSccOrganizationCustomModuleArgsCustomConfig {
  description?: string;
  recommendation: string;
  severity: string;
  custom_output: GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutput;
  predicate: GoogleSccOrganizationCustomModuleArgsCustomConfigPredicate;
  resource_selector: GoogleSccOrganizationCustomModuleArgsCustomConfigResourceSelector;
}
export interface GoogleSccOrganizationCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccOrganizationCustomModuleArgs {
  display_name: string;
  enablement_state: string;
  organization: string;
  custom_config: GoogleSccOrganizationCustomModuleArgsCustomConfig;
  timeouts?: GoogleSccOrganizationCustomModuleArgsTimeouts;
}
export class google_scc_organization_custom_module extends TerraformResource {
  readonly ancestor_module!: string;
  readonly id?: string;
  readonly last_editor!: string;
  readonly name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccOrganizationCustomModuleArgs) {
    super(config, "resource", args, resourceName, "google_scc_organization_custom_module");
  }
}