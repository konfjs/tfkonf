import { TerraformConfig, TerraformResource } from "tfs";
export interface Message {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface ConclusionStatement {
  response_card?: string;
  message: Message;
}
export interface Message {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface ConfirmationPrompt {
  max_attempts: number;
  response_card?: string;
  message: Message;
}
export interface DialogCodeHook {
  message_version: string;
  uri: string;
}
export interface Message {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface Prompt {
  max_attempts: number;
  response_card?: string;
  message: Message;
}
export interface Message {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface RejectionStatement {
  response_card?: string;
  message: Message;
}
export interface FollowUpPrompt {
  prompt: Prompt;
  rejection_statement: RejectionStatement;
}
export interface CodeHook {
  message_version: string;
  uri: string;
}
export interface FulfillmentActivity {
  type: string;
  code_hook: CodeHook;
}
export interface Message {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface RejectionStatement {
  response_card?: string;
  message: Message;
}
export interface Message {
  content: string;
  content_type: string;
  group_number?: number;
}
export interface ValueElicitationPrompt {
  max_attempts: number;
  response_card?: string;
  message: Message;
}
export interface Slot {
  description?: string;
  name: string;
  priority?: number;
  response_card?: string;
  sample_utterances?: string[];
  slot_constraint: string;
  slot_type: string;
  slot_type_version?: string;
  value_elicitation_prompt: ValueElicitationPrompt;
}
export interface Timeouts {
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
  conclusion_statement: ConclusionStatement;
  confirmation_prompt: ConfirmationPrompt;
  dialog_code_hook: DialogCodeHook;
  follow_up_prompt: FollowUpPrompt;
  fulfillment_activity: FulfillmentActivity;
  rejection_statement: RejectionStatement;
  slot: Slot;
  timeouts: Timeouts;
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