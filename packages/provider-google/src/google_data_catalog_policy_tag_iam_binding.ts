import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataCatalogPolicyTagIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataCatalogPolicyTagIamBindingArgs {
  members: string[];
  policy_tag: string;
  role: string;
  condition: GoogleDataCatalogPolicyTagIamBindingArgscondition;
}
export class google_data_catalog_policy_tag_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogPolicyTagIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_policy_tag_iam_binding");
  }
}