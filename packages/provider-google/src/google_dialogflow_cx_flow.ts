import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDialogflowCxFlowArgsAdvancedSettingsAudioExportGcsDestination {
  uri?: string;
}
export interface GoogleDialogflowCxFlowArgsAdvancedSettingsDtmfSettings {
  enabled?: boolean;
  finish_digit?: string;
  max_digits?: number;
}
export interface GoogleDialogflowCxFlowArgsAdvancedSettingsLoggingSettings {
  enable_consent_based_redaction?: boolean;
  enable_interaction_logging?: boolean;
  enable_stackdriver_logging?: boolean;
}
export interface GoogleDialogflowCxFlowArgsAdvancedSettingsSpeechSettings {
  endpointer_sensitivity?: number;
  models?: {
    [key: string]: string;
  };
  no_speech_timeout?: string;
  use_timeout_based_endpointing?: boolean;
}
export interface GoogleDialogflowCxFlowArgsAdvancedSettings {
  audio_export_gcs_destination: GoogleDialogflowCxFlowArgsAdvancedSettingsAudioExportGcsDestination;
  dtmf_settings: GoogleDialogflowCxFlowArgsAdvancedSettingsDtmfSettings;
  logging_settings: GoogleDialogflowCxFlowArgsAdvancedSettingsLoggingSettings;
  speech_settings: GoogleDialogflowCxFlowArgsAdvancedSettingsSpeechSettings;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesText {
  text?: string[];
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesOutputAudioText;
  play_audio: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
  text: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessagesText;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentSetParameterActions {
  parameter?: string;
  value?: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentConditionalCases;
  messages: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentMessages;
  set_parameter_actions: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentSetParameterActions;
}
export interface GoogleDialogflowCxFlowArgsEventHandlers {
  event?: string;
  target_flow?: string;
  target_page?: string;
  trigger_fulfillment: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillment;
}
export interface GoogleDialogflowCxFlowArgsNluSettings {
  classification_threshold?: number;
  model_training_mode?: string;
  model_type?: string;
}
export interface GoogleDialogflowCxFlowArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesText {
  text?: string[];
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesOutputAudioText;
  play_audio: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall;
  text: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessagesText;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentSetParameterActions {
  parameter?: string;
  value?: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillment {
  return_partial_responses?: boolean;
  tag?: string;
  webhook?: string;
  conditional_cases: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentConditionalCases;
  messages: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentMessages;
  set_parameter_actions: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentSetParameterActions;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutes {
  condition?: string;
  intent?: string;
  target_flow?: string;
  target_page?: string;
  trigger_fulfillment: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillment;
}
export interface GoogleDialogflowCxFlowArgs {
  description?: string;
  display_name: string;
  is_default_start_flow?: boolean;
  language_code?: string;
  parent?: string;
  transition_route_groups?: string[];
  advanced_settings: GoogleDialogflowCxFlowArgsAdvancedSettings;
  event_handlers: GoogleDialogflowCxFlowArgsEventHandlers;
  nlu_settings: GoogleDialogflowCxFlowArgsNluSettings;
  timeouts: GoogleDialogflowCxFlowArgsTimeouts;
  transition_routes: GoogleDialogflowCxFlowArgsTransitionRoutes;
}
export class google_dialogflow_cx_flow extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxFlowArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_flow");
  }
}