import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsChatbotTeamsChannelConfigurationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsChatbotTeamsChannelConfigurationArgs {
  channel_id: string;
  configuration_name: string;
  iam_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  team_id: string;
  tenant_id: string;
  timeouts: AwsChatbotTeamsChannelConfigurationArgstimeouts;
}
export class aws_chatbot_teams_channel_configuration extends TerraformResource {
  readonly channel_name?: string;
  readonly chat_configuration_arn!: string;
  readonly guardrail_policy_arns?: string[];
  readonly logging_level?: string;
  readonly sns_topic_arns?: string[];
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly team_name?: string;
  readonly user_authorization_required?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChatbotTeamsChannelConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_chatbot_teams_channel_configuration");
  }
}