import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubTopicIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePubsubTopicIamBindingArgs {
  members: string[];
  role: string;
  topic: string;
  condition: GooglePubsubTopicIamBindingArgsCondition;
}

export class google_pubsub_topic_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubTopicIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_topic_iam_binding");
  }
}
