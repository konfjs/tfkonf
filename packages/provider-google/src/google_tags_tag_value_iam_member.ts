import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleTagsTagValueIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleTagsTagValueIamMemberArgs {
  member: string;
  role: string;
  tag_value: string;
  condition: GoogleTagsTagValueIamMemberArgscondition;
}
export class google_tags_tag_value_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTagsTagValueIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_tags_tag_value_iam_member");
  }
}