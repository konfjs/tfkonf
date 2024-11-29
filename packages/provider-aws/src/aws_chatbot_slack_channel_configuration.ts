import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsChatbotSlackChannelConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsChatbotSlackChannelConfigurationArgs {
  configuration_name: string;
  iam_role_arn: string;
  slack_channel_id: string;
  slack_team_id: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsChatbotSlackChannelConfigurationArgsTimeouts;
}
export class aws_chatbot_slack_channel_configuration extends TerraformResource {
  readonly chat_configuration_arn!: string;
  readonly guardrail_policy_arns?: string[];
  readonly logging_level?: string;
  readonly slack_channel_name!: string;
  readonly slack_team_name!: string;
  readonly sns_topic_arns?: string[];
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly user_authorization_required?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChatbotSlackChannelConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_chatbot_slack_channel_configuration");
  }
}