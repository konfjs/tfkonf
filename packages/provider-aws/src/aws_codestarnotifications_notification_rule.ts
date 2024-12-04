import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodestarnotificationsNotificationRuleArgsTarget {
  address: string;
  type?: string;
}

export interface AwsCodestarnotificationsNotificationRuleArgs {
  detail_type: string;
  event_type_ids: string[];
  name: string;
  resource: string;
  status?: string;
  tags?: { [key: string]: string };
  target: AwsCodestarnotificationsNotificationRuleArgsTarget;
}

export class aws_codestarnotifications_notification_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsCodestarnotificationsNotificationRuleArgs) {
    super(config, "resource", args, resourceName, "aws_codestarnotifications_notification_rule");
  }
}
