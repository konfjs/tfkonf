import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataCatalogTagArgsfields {
  bool_value?: boolean;
  double_value?: number;
  enum_value?: string;
  field_name: string;
  string_value?: string;
  timestamp_value?: string;
}
export interface GoogleDataCatalogTagArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataCatalogTagArgs {
  column?: string;
  parent?: string;
  template: string;
  fields: GoogleDataCatalogTagArgsfields;
  timeouts: GoogleDataCatalogTagArgstimeouts;
}
export class google_data_catalog_tag extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly template_displayname!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogTagArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_tag");
  }
}