import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLexIntentArgsConclusionStatementmessage {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface AwsLexIntentArgsConclusionStatement {
  response_card?: string;
  message: AwsLexIntentArgsConclusionStatementmessage;
}
export interface AwsLexIntentArgsConfirmationPromptmessage {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface AwsLexIntentArgsConfirmationPrompt {
  max_attempts: number;
  response_card?: string;
  message: AwsLexIntentArgsConfirmationPromptmessage;
}
export interface AwsLexIntentArgsDialogCodeHook {
  message_version: string;
  uri: string;
}
export interface AwsLexIntentArgsFollowUpPromptpromptmessage {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface AwsLexIntentArgsFollowUpPromptprompt {
  max_attempts: number;
  response_card?: string;
  message: AwsLexIntentArgsFollowUpPromptpromptmessage;
}
export interface AwsLexIntentArgsFollowUpPromptRejectionStatementmessage {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface AwsLexIntentArgsFollowUpPromptRejectionStatement {
  response_card?: string;
  message: AwsLexIntentArgsFollowUpPromptRejectionStatementmessage;
}
export interface AwsLexIntentArgsFollowUpPrompt {
  prompt: AwsLexIntentArgsFollowUpPromptprompt;
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
export interface AwsLexIntentArgsRejectionStatementmessage {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface AwsLexIntentArgsRejectionStatement {
  response_card?: string;
  message: AwsLexIntentArgsRejectionStatementmessage;
}
export interface AwsLexIntentArgsslotValueElicitationPromptmessage {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface AwsLexIntentArgsslotValueElicitationPrompt {
  max_attempts: number;
  response_card?: string;
  message: AwsLexIntentArgsslotValueElicitationPromptmessage;
}
export interface AwsLexIntentArgsslot {
  description?: string;
  name: string;
  priority?: number;
  response_card?: string;
  sample_utterances?: string[];
  slot_constraint: string;
  slot_type: string;
  slot_type_version?: string;
  value_elicitation_prompt: AwsLexIntentArgsslotValueElicitationPrompt;
}
export interface AwsLexIntentArgstimeouts {
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
  slot: AwsLexIntentArgsslot;
  timeouts: AwsLexIntentArgstimeouts;
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