import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataCatalogTaxonomyIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataCatalogTaxonomyIamBindingArgs {
  members: string[];
  role: string;
  taxonomy: string;
  condition: GoogleDataCatalogTaxonomyIamBindingArgsCondition;
}
export class google_data_catalog_taxonomy_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogTaxonomyIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_taxonomy_iam_binding");
  }
}