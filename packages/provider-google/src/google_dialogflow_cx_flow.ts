import { TerraformConfig, TerraformResource } from "tfs";
export interface AudioExportGcsDestination {
  uri?: string;
}
export interface DtmfSettings {
  enabled?: boolean;
  finish_digit?: string;
  max_digits?: number;
}
export interface LoggingSettings {
  enable_consent_based_redaction?: boolean;
  enable_interaction_logging?: boolean;
  enable_stackdriver_logging?: boolean;
}
export interface SpeechSettings {
  endpointer_sensitivity?: number;
  models?: {
    [key: string]: string;
  };
  no_speech_timeout?: string;
  use_timeout_based_endpointing?: boolean;
}
export interface AdvancedSettings {
  audio_export_gcs_destination: AudioExportGcsDestination;
  dtmf_settings: DtmfSettings;
  logging_settings: LoggingSettings;
  speech_settings: SpeechSettings;
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
export interface NluSettings {
  classification_threshold?: number;
  model_training_mode?: string;
  model_type?: string;
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
export interface GoogleDialogflowCxFlowArgs {
  description?: string;
  display_name: string;
  is_default_start_flow?: boolean;
  language_code?: string;
  parent?: string;
  transition_route_groups?: string[];
  advanced_settings: AdvancedSettings;
  event_handlers: EventHandlers;
  nlu_settings: NluSettings;
  timeouts: Timeouts;
  transition_routes: TransitionRoutes;
}
export class google_dialogflow_cx_flow extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxFlowArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_flow");
  }
}