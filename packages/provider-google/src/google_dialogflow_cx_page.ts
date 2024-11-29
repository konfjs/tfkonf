import { TerraformConfig, TerraformResource } from "tfs";
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
export interface GoogleDialogflowCxPageArgsEntryFulfillmentmessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentmessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentmessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentmessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentmessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentmessagestext {
  text?: string[];
}
export interface GoogleDialogflowCxPageArgsEntryFulfillmentmessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxPageArgsEntryFulfillmentmessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxPageArgsEntryFulfillmentmessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxPageArgsEntryFulfillmentmessagesOutputAudioText;
  play_audio: GoogleDialogflowCxPageArgsEntryFulfillmentmessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxPageArgsEntryFulfillmentmessagesTelephonyTransferCall;
  text: GoogleDialogflowCxPageArgsEntryFulfillmentmessagestext;
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
  messages: GoogleDialogflowCxPageArgsEntryFulfillmentmessages;
  set_parameter_actions: GoogleDialogflowCxPageArgsEntryFulfillmentSetParameterActions;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagestext {
  text?: string[];
}
export interface GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagesOutputAudioText;
  play_audio: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagesTelephonyTransferCall;
  text: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessagestext;
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
  messages: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentmessages;
  set_parameter_actions: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillmentSetParameterActions;
}
export interface GoogleDialogflowCxPageArgsEventHandlers {
  event?: string;
  target_flow?: string;
  target_page?: string;
  trigger_fulfillment: GoogleDialogflowCxPageArgsEventHandlersTriggerFulfillment;
}
export interface GoogleDialogflowCxPageArgsformparametersAdvancedSettingsDtmfSettings {
  enabled?: boolean;
  finish_digit?: string;
  max_digits?: number;
}
export interface GoogleDialogflowCxPageArgsformparametersAdvancedSettings {
  dtmf_settings: GoogleDialogflowCxPageArgsformparametersAdvancedSettingsDtmfSettings;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagestext {
  text?: string[];
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagesOutputAudioText;
  play_audio: GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagesTelephonyTransferCall;
  text: GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessagestext;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentSetParameterActions {
  parameter?: string;
  value?: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentConditionalCases;
  messages: GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentmessages;
  set_parameter_actions: GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillmentSetParameterActions;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagestext {
  text?: string[];
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagesOutputAudioText;
  play_audio: GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagesTelephonyTransferCall;
  text: GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessagestext;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions {
  parameter?: string;
  value?: string;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases;
  messages: GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentmessages;
  set_parameter_actions: GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlers {
  event?: string;
  target_flow?: string;
  target_page?: string;
  trigger_fulfillment: GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlersTriggerFulfillment;
}
export interface GoogleDialogflowCxPageArgsformparametersFillBehavior {
  initial_prompt_fulfillment: GoogleDialogflowCxPageArgsformparametersFillBehaviorInitialPromptFulfillment;
  reprompt_event_handlers: GoogleDialogflowCxPageArgsformparametersFillBehaviorRepromptEventHandlers;
}
export interface GoogleDialogflowCxPageArgsformparameters {
  default_value?: string;
  display_name?: string;
  entity_type?: string;
  is_list?: boolean;
  redact?: boolean;
  required?: boolean;
  advanced_settings: GoogleDialogflowCxPageArgsformparametersAdvancedSettings;
  fill_behavior: GoogleDialogflowCxPageArgsformparametersFillBehavior;
}
export interface GoogleDialogflowCxPageArgsform {
  parameters: GoogleDialogflowCxPageArgsformparameters;
}
export interface GoogleDialogflowCxPageArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagestext {
  text?: string[];
}
export interface GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagesOutputAudioText;
  play_audio: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagesTelephonyTransferCall;
  text: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessagestext;
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
  messages: GoogleDialogflowCxPageArgsTransitionRoutesTriggerFulfillmentmessages;
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
  form: GoogleDialogflowCxPageArgsform;
  timeouts: GoogleDialogflowCxPageArgstimeouts;
  transition_routes: GoogleDialogflowCxPageArgsTransitionRoutes;
}
export class google_dialogflow_cx_page extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxPageArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_page");
  }
}