import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputDtmf {
  digits?: string;
  finish_digit?: string;
}
export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputEvent {
  event: string;
}
export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputText {
  text: string;
}
export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInput {
  language_code?: string;
  dtmf: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputDtmf;
  event: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputEvent;
  text: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInputText;
}
export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInput {
  enable_sentiment_analysis?: boolean;
  injected_parameters?: string;
  is_webhook_enabled?: boolean;
  input: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInputInput;
}
export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputCurrentPage {
  name?: string;
}
export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputTextResponses {
  text?: string[];
}
export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent {
  name?: string;
}
export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutput {
  session_parameters?: string;
  current_page: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputCurrentPage;
  text_responses: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputTextResponses;
  triggered_intent: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent;
}
export interface GoogleDialogflowCxTestCaseArgsTestCaseConversationTurns {
  user_input: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsUserInput;
  virtual_agent_output: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurnsVirtualAgentOutput;
}
export interface GoogleDialogflowCxTestCaseArgsTestConfig {
  flow?: string;
  page?: string;
  tracking_parameters?: string[];
}
export interface GoogleDialogflowCxTestCaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxTestCaseArgs {
  display_name: string;
  notes?: string;
  parent?: string;
  tags?: string[];
  test_case_conversation_turns: GoogleDialogflowCxTestCaseArgsTestCaseConversationTurns;
  test_config: GoogleDialogflowCxTestCaseArgsTestConfig;
  timeouts: GoogleDialogflowCxTestCaseArgsTimeouts;
}
export class google_dialogflow_cx_test_case extends TerraformResource {
  readonly creation_time!: string;
  readonly id?: string;
  readonly last_test_result!: any[];
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxTestCaseArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_test_case");
  }
}