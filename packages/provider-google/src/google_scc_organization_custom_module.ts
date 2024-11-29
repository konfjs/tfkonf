import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputpropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputproperties {
  name?: string;
  value_expression: GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputpropertiesValueExpression;
}
export interface GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutput {
  properties: GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputproperties;
}
export interface GoogleSccOrganizationCustomModuleArgsCustomConfigpredicate {
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
  predicate: GoogleSccOrganizationCustomModuleArgsCustomConfigpredicate;
  resource_selector: GoogleSccOrganizationCustomModuleArgsCustomConfigResourceSelector;
}
export interface GoogleSccOrganizationCustomModuleArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccOrganizationCustomModuleArgs {
  display_name: string;
  enablement_state: string;
  organization: string;
  custom_config: GoogleSccOrganizationCustomModuleArgsCustomConfig;
  timeouts: GoogleSccOrganizationCustomModuleArgstimeouts;
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