import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataCatalogPolicyTagIamPolicyArgs {
  policy_data: string;
  policy_tag: string;
}
export class google_data_catalog_policy_tag_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogPolicyTagIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_policy_tag_iam_policy");
  }
}