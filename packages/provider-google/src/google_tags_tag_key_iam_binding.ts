import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleTagsTagKeyIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleTagsTagKeyIamBindingArgs {
  members: string[];
  role: string;
  tag_key: string;
  condition: GoogleTagsTagKeyIamBindingArgscondition;
}
export class google_tags_tag_key_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTagsTagKeyIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_tags_tag_key_iam_binding");
  }
}