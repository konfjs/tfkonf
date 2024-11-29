import { TerraformConfig, TerraformResource } from "tfs";
export interface DtmfSettings {
  enabled?: boolean;
  finish_digit?: string;
  max_digits?: number;
}
export interface AdvancedSettings {
  dtmf_settings: DtmfSettings;
}
export interface ConditionalCases {
  cases?: string;
}
export interface ConversationSuccess {
  metadata?: string;
}
export interface LiveAgentHandoff {
  metadata?: string;
}
export interface OutputAudioText {
  ssml?: string;
  text?: string;
}
export interface PlayAudio {
  audio_uri: string;
}
export interface TelephonyTransferCall {
  phone_number: string;
}
export interface Text {
  text?: string[];
}
export interface Messages {
  channel?: string;
  payload?: string;
  conversation_success: ConversationSuccess;
  live_agent_handoff: LiveAgentHandoff;
  output_audio_text: OutputAudioText;
  play_audio: PlayAudio;
  telephony_transfer_call: TelephonyTransferCall;
  text: Text;
}
export interface SetParameterActions {
  parameter?: string;
  value?: string;
}
export interface EntryFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: ConditionalCases;
  messages: Messages;
  set_parameter_actions: SetParameterActions;
}
export interface ConditionalCases {
  cases?: string;
}
export interface ConversationSuccess {
  metadata?: string;
}
export interface LiveAgentHandoff {
  metadata?: string;
}
export interface OutputAudioText {
  ssml?: string;
  text?: string;
}
export interface PlayAudio {
  audio_uri: string;
}
export interface TelephonyTransferCall {
  phone_number: string;
}
export interface Text {
  text?: string[];
}
export interface Messages {
  channel?: string;
  payload?: string;
  conversation_success: ConversationSuccess;
  live_agent_handoff: LiveAgentHandoff;
  output_audio_text: OutputAudioText;
  play_audio: PlayAudio;
  telephony_transfer_call: TelephonyTransferCall;
  text: Text;
}
export interface SetParameterActions {
  parameter?: string;
  value?: string;
}
export interface TriggerFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: ConditionalCases;
  messages: Messages;
  set_parameter_actions: SetParameterActions;
}
export interface EventHandlers {
  event?: string;
  target_flow?: string;
  target_page?: string;
  trigger_fulfillment: TriggerFulfillment;
}
export interface DtmfSettings {
  enabled?: boolean;
  finish_digit?: string;
  max_digits?: number;
}
export interface AdvancedSettings {
  dtmf_settings: DtmfSettings;
}
export interface ConditionalCases {
  cases?: string;
}
export interface ConversationSuccess {
  metadata?: string;
}
export interface LiveAgentHandoff {
  metadata?: string;
}
export interface OutputAudioText {
  ssml?: string;
  text?: string;
}
export interface PlayAudio {
  audio_uri: string;
}
export interface TelephonyTransferCall {
  phone_number: string;
}
export interface Text {
  text?: string[];
}
export interface Messages {
  channel?: string;
  payload?: string;
  conversation_success: ConversationSuccess;
  live_agent_handoff: LiveAgentHandoff;
  output_audio_text: OutputAudioText;
  play_audio: PlayAudio;
  telephony_transfer_call: TelephonyTransferCall;
  text: Text;
}
export interface SetParameterActions {
  parameter?: string;
  value?: string;
}
export interface InitialPromptFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: ConditionalCases;
  messages: Messages;
  set_parameter_actions: SetParameterActions;
}
export interface ConditionalCases {
  cases?: string;
}
export interface ConversationSuccess {
  metadata?: string;
}
export interface LiveAgentHandoff {
  metadata?: string;
}
export interface OutputAudioText {
  ssml?: string;
  text?: string;
}
export interface PlayAudio {
  audio_uri: string;
}
export interface TelephonyTransferCall {
  phone_number: string;
}
export interface Text {
  text?: string[];
}
export interface Messages {
  channel?: string;
  payload?: string;
  conversation_success: ConversationSuccess;
  live_agent_handoff: LiveAgentHandoff;
  output_audio_text: OutputAudioText;
  play_audio: PlayAudio;
  telephony_transfer_call: TelephonyTransferCall;
  text: Text;
}
export interface SetParameterActions {
  parameter?: string;
  value?: string;
}
export interface TriggerFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: ConditionalCases;
  messages: Messages;
  set_parameter_actions: SetParameterActions;
}
export interface RepromptEventHandlers {
  event?: string;
  target_flow?: string;
  target_page?: string;
  trigger_fulfillment: TriggerFulfillment;
}
export interface FillBehavior {
  initial_prompt_fulfillment: InitialPromptFulfillment;
  reprompt_event_handlers: RepromptEventHandlers;
}
export interface Parameters {
  default_value?: string;
  display_name?: string;
  entity_type?: string;
  is_list?: boolean;
  redact?: boolean;
  required?: boolean;
  advanced_settings: AdvancedSettings;
  fill_behavior: FillBehavior;
}
export interface Form {
  parameters: Parameters;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface ConditionalCases {
  cases?: string;
}
export interface ConversationSuccess {
  metadata?: string;
}
export interface LiveAgentHandoff {
  metadata?: string;
}
export interface OutputAudioText {
  ssml?: string;
  text?: string;
}
export interface PlayAudio {
  audio_uri: string;
}
export interface TelephonyTransferCall {
  phone_number: string;
}
export interface Text {
  text?: string[];
}
export interface Messages {
  channel?: string;
  payload?: string;
  conversation_success: ConversationSuccess;
  live_agent_handoff: LiveAgentHandoff;
  output_audio_text: OutputAudioText;
  play_audio: PlayAudio;
  telephony_transfer_call: TelephonyTransferCall;
  text: Text;
}
export interface SetParameterActions {
  parameter?: string;
  value?: string;
}
export interface TriggerFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: ConditionalCases;
  messages: Messages;
  set_parameter_actions: SetParameterActions;
}
export interface TransitionRoutes {
  condition?: string;
  intent?: string;
  target_flow?: string;
  target_page?: string;
  trigger_fulfillment: TriggerFulfillment;
}
export interface GoogleDialogflowCxPageArgs {
  display_name: string;
  language_code?: string;
  parent?: string;
  transition_route_groups?: string[];
  advanced_settings: AdvancedSettings;
  entry_fulfillment: EntryFulfillment;
  event_handlers: EventHandlers;
  form: Form;
  timeouts: Timeouts;
  transition_routes: TransitionRoutes;
}
export class google_dialogflow_cx_page extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxPageArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_page");
  }
}