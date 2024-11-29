import { TerraformConfig, TerraformResource } from "tfs";
export interface Message {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface AbortStatement {
  response_card?: string;
  message: Message;
}
export interface Message {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface ClarificationPrompt {
  max_attempts: number;
  response_card?: string;
  message: Message;
}
export interface Intent {
  intent_name: string;
  intent_version: string;
}
export interface Timeouts {
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
  abort_statement: AbortStatement;
  clarification_prompt: ClarificationPrompt;
  intent: Intent;
  timeouts: Timeouts;
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