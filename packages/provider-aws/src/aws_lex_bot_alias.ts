import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLexBotAliasArgsConversationLogsLogSettings {
  destination: string;
  kms_key_arn?: string;
  log_type: string;
  resource_arn: string;
}
export interface AwsLexBotAliasArgsConversationLogs {
  iam_role_arn: string;
  log_settings: AwsLexBotAliasArgsConversationLogsLogSettings;
}
export interface AwsLexBotAliasArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsLexBotAliasArgs {
  bot_name: string;
  bot_version: string;
  description?: string;
  name: string;
  conversation_logs: AwsLexBotAliasArgsConversationLogs;
  timeouts: AwsLexBotAliasArgsTimeouts;
}
export class aws_lex_bot_alias extends TerraformResource {
  readonly arn!: string;
  readonly checksum!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLexBotAliasArgs) {
    super(config, "resource", args, resourceName, "aws_lex_bot_alias");
  }
}