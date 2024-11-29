import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataCatalogTagTemplateArgsFieldsTypeEnumTypeAllowedValues {
  display_name: string;
}
export interface GoogleDataCatalogTagTemplateArgsFieldsTypeEnumType {
  allowed_values: GoogleDataCatalogTagTemplateArgsFieldsTypeEnumTypeAllowedValues;
}
export interface GoogleDataCatalogTagTemplateArgsFieldsType {
  enum_type: GoogleDataCatalogTagTemplateArgsFieldsTypeEnumType;
}
export interface GoogleDataCatalogTagTemplateArgsFields {
  field_id: string;
  type: GoogleDataCatalogTagTemplateArgsFieldsType;
}
export interface GoogleDataCatalogTagTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataCatalogTagTemplateArgs {
  display_name?: string;
  force_delete?: boolean;
  tag_template_id: string;
  fields: GoogleDataCatalogTagTemplateArgsFields;
  timeouts: GoogleDataCatalogTagTemplateArgsTimeouts;
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