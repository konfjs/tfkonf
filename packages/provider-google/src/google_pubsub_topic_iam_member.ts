import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePubsubTopicIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GooglePubsubTopicIamMemberArgs {
  member: string;
  role: string;
  topic: string;
  condition: GooglePubsubTopicIamMemberArgsCondition;
}
export class google_pubsub_topic_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubTopicIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_topic_iam_member");
  }
}