import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleTagsTagValueIamPolicyArgs {
  policy_data: string;
  tag_value: string;
}
export class google_tags_tag_value_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTagsTagValueIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_tags_tag_value_iam_policy");
  }
}