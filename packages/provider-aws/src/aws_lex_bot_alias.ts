import { TerraformConfig, TerraformResource } from "tfs";
export interface LogSettings {
  destination: string;
  kms_key_arn?: string;
  log_type: string;
  resource_arn: string;
}
export interface ConversationLogs {
  iam_role_arn: string;
  log_settings: LogSettings;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsLexBotAliasArgs {
  bot_name: string;
  bot_version: string;
  description?: string;
  name: string;
  conversation_logs: ConversationLogs;
  timeouts: Timeouts;
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