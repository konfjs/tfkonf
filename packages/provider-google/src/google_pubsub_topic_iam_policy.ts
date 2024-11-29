import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GooglePubsubTopicIamPolicyArgs {
  policy_data: string;
  topic: string;
}
export class google_pubsub_topic_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubTopicIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_topic_iam_policy");
  }
}