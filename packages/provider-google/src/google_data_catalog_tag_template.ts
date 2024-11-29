import { TerraformConfig, TerraformResource } from "tfs";
export interface AllowedValues {
  display_name: string;
}
export interface EnumType {
  allowed_values: AllowedValues;
}
export interface Type {
  enum_type: EnumType;
}
export interface Fields {
  field_id: string;
  type: Type;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataCatalogTagTemplateArgs {
  display_name?: string;
  force_delete?: boolean;
  tag_template_id: string;
  fields: Fields;
  timeouts: Timeouts;
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