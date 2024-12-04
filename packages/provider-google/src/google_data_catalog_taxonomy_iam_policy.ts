import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogTaxonomyIamPolicyArgs {
  policy_data: string;
  taxonomy: string;
}

export class google_data_catalog_taxonomy_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogTaxonomyIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_taxonomy_iam_policy");
  }
}
