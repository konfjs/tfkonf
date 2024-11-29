import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDialogflowCxPageArgsAdvancedSettingsDtmfSettings {
  enabled?: boolean;
  finish_digit?: string;
  max_digits?: number;
}
export interface GoogleDialogflowCxPageArgsAdvancedSettings {
  dtmf_settings: GoogleDialogflowCxPageArgsAdvancedSettingsDtmfSettings;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentMessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentMessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentMessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentMessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentMessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentMessagesText {
  text?: string[];
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentMessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxPageArgsEntryFulfillmentMessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxPageArgsEntryFulfillmentMessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxPageArgsEntryFulfillmentMessagesOutputAudioText;
  play_audio: GoogleDialogflowCxPageArgsEntryFulfillmentMessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxPageArgsEntryFulfillmentMessagesTelephonyTransferCall;
  text: GoogleDialogflowCxPageArgsEntryFulfillmentMessagesText;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentSetParameterActions {
  parameter?: string;
  value?: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: GoogleDialogflowCxPageArgsEntryFulfillmentConditionalCases;
  messages: GoogleDialogflowCxPageArgsEntryFulfillmentMessages;
  set_parameter_actions: GoogleDialogflowCxPageArgsEntryFulfillmentSetParameterActions;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesText {
  text?: string[];
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesOutputAudioText;
  play_audio: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
  text: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessagesText;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentSetParameterActions {
  parameter?: string;
  value?: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentConditionalCases;
  messages: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentMessages;
  set_parameter_actions: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentSetParameterActions;
}
export interface GoogleDialogflowCxPageArgsEventHandlers {
  event?: string;
  target_flow?: string;
  target_page?: string;
  trigger_fulfillment: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillment;
}
export interface GoogleDialogflowCxPageArgsFormParametersAdvancedSettingsDtmfSettings {
  enabled?: boolean;
  finish_digit?: string;
  max_digits?: number;
}
export interface GoogleDialogflowCxPageArgsFormParametersAdvancedSettings {
  dtmf_settings: GoogleDialogflowCxPageArgsFormParametersAdvancedSettingsDtmfSettings;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesText {
  text?: string[];
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText;
  play_audio: GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall;
  text: GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessagesText;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions {
  parameter?: string;
  value?: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases;
  messages: GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentMessages;
  set_parameter_actions: GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText {
  text?: string[];
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText;
  play_audio: GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
  text: GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions {
  parameter?: string;
  value?: string;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases;
  messages: GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages;
  set_parameter_actions: GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlers {
  event?: string;
  target_flow?: string;
  target_page?: string;
  trigger_fulfillment: GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment;
}
export interface GoogleDialogflowCxPageArgsFormParametersFillBehavior {
  initial_prompt_fulfillment: GoogleDialogflowCxPageArgsFormParametersFillBehaviorInitialPromptFulfillment;
  reprompt_event_handlers: GoogleDialogflowCxPageArgsFormParametersFillBehaviorRepromptEventHandlers;
}
export interface GoogleDialogflowCxPageArgsFormParameters {
  default_value?: string;
  display_name?: string;
  entity_type?: string;
  is_list?: boolean;
  redact?: boolean;
  required?: boolean;
  advanced_settings: GoogleDialogflowCxPageArgsFormParametersAdvancedSettings;
  fill_behavior: GoogleDialogflowCxPageArgsFormParametersFillBehavior;
}
export interface GoogleDialogflowCxPageArgsForm {
  parameters: GoogleDialogflowCxPageArgsFormParameters;
}
export interface GoogleDialogflowCxPageArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesText {
  text?: string[];
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesOutputAudioText;
  play_audio: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall;
  text: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessagesText;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentSetParameterActions {
  parameter?: string;
  value?: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentConditionalCases;
  messages: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentMessages;
  set_parameter_actions: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentSetParameterActions;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutes {
  condition?: string;
  intent?: string;
  target_flow?: string;
  target_page?: string;
  trigger_fulfillment: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillment;
}
export interface GoogleDialogflowCxPageArgs {
  display_name: string;
  language_code?: string;
  parent?: string;
  transition_route_groups?: string[];
  advanced_settings: GoogleDialogflowCxPageArgsAdvancedSettings;
  entry_fulfillment: GoogleDialogflowCxPageArgsEntryFulfillment;
  event_handlers: GoogleDialogflowCxPageArgsEventHandlers;
  form: GoogleDialogflowCxPageArgsForm;
  timeouts: GoogleDialogflowCxPageArgsTimeouts;
  transition_routes: GoogleDialogflowCxPageArgsTransitionRoutes;
}
export class google_dialogflow_cx_page extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxPageArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_page");
  }
}