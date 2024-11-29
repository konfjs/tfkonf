import { TerraformConfig, TerraformResource } from "tfs";
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
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagestext {
  text?: string[];
}
export interface GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagesOutputAudioText;
  play_audio: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagesTelephonyTransferCall;
  text: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessagestext;
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
  messages: GoogleDialogflowCxFlowArgsEventHandlersTriggerFulfillmentmessages;
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
export interface GoogleDialogflowCxFlowArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentConditionalCases {
  cases?: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagesConversationSuccess {
  metadata?: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagesLiveAgentHandoff {
  metadata?: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagesOutputAudioText {
  ssml?: string;
  text?: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagesPlayAudio {
  audio_uri: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagesTelephonyTransferCall {
  phone_number: string;
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagestext {
  text?: string[];
}
export interface GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessages {
  channel?: string;
  payload?: string;
  conversation_success: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagesConversationSuccess;
  live_agent_handoff: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagesLiveAgentHandoff;
  output_audio_text: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagesOutputAudioText;
  play_audio: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagesPlayAudio;
  telephony_transfer_call: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagesTelephonyTransferCall;
  text: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessagestext;
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
  messages: GoogleDialogflowCxFlowArgsTransitionRoutesTriggerFulfillmentmessages;
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
  timeouts: GoogleDialogflowCxFlowArgstimeouts;
  transition_routes: GoogleDialogflowCxFlowArgsTransitionRoutes;
}
export class google_dialogflow_cx_flow extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxFlowArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_flow");
  }
}