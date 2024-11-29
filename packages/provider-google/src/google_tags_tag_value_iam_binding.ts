import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleTagsTagValueIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleTagsTagValueIamBindingArgs {
  members: string[];
  role: string;
  tag_value: string;
  condition: GoogleTagsTagValueIamBindingArgscondition;
}
export class google_tags_tag_value_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTagsTagValueIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_tags_tag_value_iam_binding");
  }
}