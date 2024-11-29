import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataCatalogTagTemplateArgsfieldstypeEnumTypeAllowedValues {
  display_name: string;
}
export interface GoogleDataCatalogTagTemplateArgsfieldstypeEnumType {
  allowed_values: GoogleDataCatalogTagTemplateArgsfieldstypeEnumTypeAllowedValues;
}
export interface GoogleDataCatalogTagTemplateArgsfieldstype {
  enum_type: GoogleDataCatalogTagTemplateArgsfieldstypeEnumType;
}
export interface GoogleDataCatalogTagTemplateArgsfields {
  field_id: string;
  type: GoogleDataCatalogTagTemplateArgsfieldstype;
}
export interface GoogleDataCatalogTagTemplateArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataCatalogTagTemplateArgs {
  display_name?: string;
  force_delete?: boolean;
  tag_template_id: string;
  fields: GoogleDataCatalogTagTemplateArgsfields;
  timeouts: GoogleDataCatalogTagTemplateArgstimeouts;
}
export class google_data_catalog_tag_template extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogTagTemplateArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_tag_template");
  }
}