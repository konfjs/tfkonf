import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLexBotArgsAbortStatementMessage {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface AwsLexBotArgsAbortStatement {
  response_card?: string;
  message: AwsLexBotArgsAbortStatementMessage;
}
export interface AwsLexBotArgsClarificationPromptMessage {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface AwsLexBotArgsClarificationPrompt {
  max_attempts: number;
  response_card?: string;
  message: AwsLexBotArgsClarificationPromptMessage;
}
export interface AwsLexBotArgsIntent {
  intent_name: string;
  intent_version: string;
}
export interface AwsLexBotArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsLexBotArgs {
  child_directed: boolean;
  create_version?: boolean;
  description?: string;
  detect_sentiment?: boolean;
  enable_model_improvements?: boolean;
  idle_session_ttl_in_seconds?: number;
  locale?: string;
  name: string;
  nlu_intent_confidence_threshold?: number;
  process_behavior?: string;
  abort_statement: AwsLexBotArgsAbortStatement;
  clarification_prompt: AwsLexBotArgsClarificationPrompt;
  intent: AwsLexBotArgsIntent;
  timeouts: AwsLexBotArgsTimeouts;
}
export class aws_lex_bot extends TerraformResource {
  readonly arn!: string;
  readonly checksum!: string;
  readonly created_date!: string;
  readonly failure_reason!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  readonly status!: string;
  readonly version!: string;
  readonly voice_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLexBotArgs) {
    super(config, "resource", args, resourceName, "aws_lex_bot");
  }
}