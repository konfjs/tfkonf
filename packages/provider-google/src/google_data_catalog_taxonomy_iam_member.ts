import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataCatalogTaxonomyIamMemberArgs {
  member: string;
  role: string;
  taxonomy: string;
  condition: Condition;
}
export class google_data_catalog_taxonomy_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogTaxonomyIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_taxonomy_iam_member");
  }
}