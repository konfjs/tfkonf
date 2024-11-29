import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataCatalogTagTemplateIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataCatalogTagTemplateIamBindingArgs {
  members: string[];
  role: string;
  tag_template: string;
  condition: GoogleDataCatalogTagTemplateIamBindingArgsCondition;
}
export class google_data_catalog_tag_template_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogTagTemplateIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_tag_template_iam_binding");
  }
}