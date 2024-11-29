import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleTagsTagKeyIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleTagsTagKeyIamMemberArgs {
  member: string;
  role: string;
  tag_key: string;
  condition: GoogleTagsTagKeyIamMemberArgscondition;
}
export class google_tags_tag_key_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTagsTagKeyIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_tags_tag_key_iam_member");
  }
}