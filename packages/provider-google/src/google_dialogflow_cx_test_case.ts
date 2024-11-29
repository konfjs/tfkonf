import { TerraformConfig, TerraformResource } from "tfs";
export interface Dtmf {
  digits?: string;
  finish_digit?: string;
}
export interface Event {
  event: string;
}
export interface Text {
  text: string;
}
export interface Input {
  language_code?: string;
  dtmf: Dtmf;
  event: Event;
  text: Text;
}
export interface UserInput {
  enable_sentiment_analysis?: boolean;
  injected_parameters?: string;
  is_webhook_enabled?: boolean;
  input: Input;
}
export interface CurrentPage {
  name?: string;
}
export interface TextResponses {
  text?: string[];
}
export interface TriggeredIntent {
  name?: string;
}
export interface VirtualAgentOutput {
  session_parameters?: string;
  current_page: CurrentPage;
  text_responses: TextResponses;
  triggered_intent: TriggeredIntent;
}
export interface TestCaseConversationTurns {
  user_input: UserInput;
  virtual_agent_output: VirtualAgentOutput;
}
export interface TestConfig {
  flow?: string;
  page?: string;
  tracking_parameters?: string[];
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxTestCaseArgs {
  display_name: string;
  notes?: string;
  parent?: string;
  tags?: string[];
  test_case_conversation_turns: TestCaseConversationTurns;
  test_config: TestConfig;
  timeouts: Timeouts;
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