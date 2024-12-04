import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLexIntentArgsConclusionStatementMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsConclusionStatement {
  response_card?: string;
  message: AwsLexIntentArgsConclusionStatementMessage;
}

export interface AwsLexIntentArgsConfirmationPromptMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsConfirmationPrompt {
  max_attempts: number;
  response_card?: string;
  message: AwsLexIntentArgsConfirmationPromptMessage;
}

export interface AwsLexIntentArgsDialogCodeHook {
  message_version: string;
  uri: string;
}

export interface AwsLexIntentArgsFollowUpPromptPromptMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsFollowUpPromptPrompt {
  max_attempts: number;
  response_card?: string;
  message: AwsLexIntentArgsFollowUpPromptPromptMessage;
}

export interface AwsLexIntentArgsFollowUpPromptRejectionStatementMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsFollowUpPromptRejectionStatement {
  response_card?: string;
  message: AwsLexIntentArgsFollowUpPromptRejectionStatementMessage;
}

export interface AwsLexIntentArgsFollowUpPrompt {
  prompt: AwsLexIntentArgsFollowUpPromptPrompt;
  rejection_statement: AwsLexIntentArgsFollowUpPromptRejectionStatement;
}

export interface AwsLexIntentArgsFulfillmentActivityCodeHook {
  message_version: string;
  uri: string;
}

export interface AwsLexIntentArgsFulfillmentActivity {
  type: string;
  code_hook: AwsLexIntentArgsFulfillmentActivityCodeHook;
}

export interface AwsLexIntentArgsRejectionStatementMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsRejectionStatement {
  response_card?: string;
  message: AwsLexIntentArgsRejectionStatementMessage;
}

export interface AwsLexIntentArgsSlotValueElicitationPromptMessage {
  content: string;
  content_type: string;
  group_number?: number;
}

export interface AwsLexIntentArgsSlotValueElicitationPrompt {
  max_attempts: number;
  response_card?: string;
  message: AwsLexIntentArgsSlotValueElicitationPromptMessage;
}

export interface AwsLexIntentArgsSlot {
  description?: string;
  name: string;
  priority?: number;
  response_card?: string;
  sample_utterances?: string[];
  slot_constraint: string;
  slot_type: string;
  slot_type_version?: string;
  value_elicitation_prompt: AwsLexIntentArgsSlotValueElicitationPrompt;
}

export interface AwsLexIntentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLexIntentArgs {
  create_version?: boolean;
  description?: string;
  name: string;
  parent_intent_signature?: string;
  sample_utterances?: string[];
  conclusion_statement: AwsLexIntentArgsConclusionStatement;
  confirmation_prompt: AwsLexIntentArgsConfirmationPrompt;
  dialog_code_hook: AwsLexIntentArgsDialogCodeHook;
  follow_up_prompt: AwsLexIntentArgsFollowUpPrompt;
  fulfillment_activity: AwsLexIntentArgsFulfillmentActivity;
  rejection_statement: AwsLexIntentArgsRejectionStatement;
  slot: AwsLexIntentArgsSlot;
  timeouts?: AwsLexIntentArgsTimeouts;
}

export class aws_lex_intent extends TerraformResource {
  readonly arn!: string;
  readonly checksum!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  readonly version!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLexIntentArgs) {
    super(config, "resource", args, resourceName, "aws_lex_intent");
  }
}
