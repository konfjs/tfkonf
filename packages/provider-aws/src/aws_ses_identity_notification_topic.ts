import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSesIdentityNotificationTopicArgs {
  identity: string;
  include_original_headers?: boolean;
  notification_type: string;
  topic_arn?: string;
}
export class aws_ses_identity_notification_topic extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesIdentityNotificationTopicArgs) {
    super(config, "resource", args, resourceName, "aws_ses_identity_notification_topic");
  }
}