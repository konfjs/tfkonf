import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataCatalogTagTemplateIamPolicyArgs {
  policy_data: string;
  tag_template: string;
}
export class google_data_catalog_tag_template_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogTagTemplateIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_tag_template_iam_policy");
  }
}