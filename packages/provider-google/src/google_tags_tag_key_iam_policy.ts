import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleTagsTagKeyIamPolicyArgs {
  policy_data: string;
  tag_key: string;
}
export class google_tags_tag_key_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTagsTagKeyIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_tags_tag_key_iam_policy");
  }
}