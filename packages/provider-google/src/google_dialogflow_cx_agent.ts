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
export interface GithubSettings {
  access_token?: string;
  branches?: string[];
  display_name?: string;
  repository_uri?: string;
  tracking_branch?: string;
}
export interface GitIntegrationSettings {
  github_settings: GithubSettings;
}
export interface SpeechToTextSettings {
  enable_speech_adaptation?: boolean;
}
export interface TextToSpeechSettings {
  synthesize_speech_configs?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxAgentArgs {
  avatar_uri?: string;
  default_language_code: string;
  description?: string;
  display_name: string;
  enable_spell_correction?: boolean;
  enable_stackdriver_logging?: boolean;
  location: string;
  security_settings?: string;
  supported_language_codes?: string[];
  time_zone: string;
  advanced_settings: AdvancedSettings;
  git_integration_settings: GitIntegrationSettings;
  speech_to_text_settings: SpeechToTextSettings;
  text_to_speech_settings: TextToSpeechSettings;
  timeouts: Timeouts;
}
export class google_dialogflow_cx_agent extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly start_flow!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxAgentArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_agent");
  }
}