import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowCxAgentArgsAdvancedSettingsAudioExportGcsDestination {
  uri?: string;
}

export interface GoogleDialogflowCxAgentArgsAdvancedSettingsDtmfSettings {
  enabled?: boolean;
  finish_digit?: string;
  max_digits?: number;
}

export interface GoogleDialogflowCxAgentArgsAdvancedSettingsLoggingSettings {
  enable_consent_based_redaction?: boolean;
  enable_interaction_logging?: boolean;
  enable_stackdriver_logging?: boolean;
}

export interface GoogleDialogflowCxAgentArgsAdvancedSettingsSpeechSettings {
  endpointer_sensitivity?: number;
  models?: { [key: string]: string };
  no_speech_timeout?: string;
  use_timeout_based_endpointing?: boolean;
}

export interface GoogleDialogflowCxAgentArgsAdvancedSettings {
  audio_export_gcs_destination: GoogleDialogflowCxAgentArgsAdvancedSettingsAudioExportGcsDestination;
  dtmf_settings: GoogleDialogflowCxAgentArgsAdvancedSettingsDtmfSettings;
  logging_settings: GoogleDialogflowCxAgentArgsAdvancedSettingsLoggingSettings;
  speech_settings: GoogleDialogflowCxAgentArgsAdvancedSettingsSpeechSettings;
}

export interface GoogleDialogflowCxAgentArgsGitIntegrationSettingsGithubSettings {
  access_token?: string;
  branches?: string[];
  display_name?: string;
  repository_uri?: string;
  tracking_branch?: string;
}

export interface GoogleDialogflowCxAgentArgsGitIntegrationSettings {
  github_settings: GoogleDialogflowCxAgentArgsGitIntegrationSettingsGithubSettings;
}

export interface GoogleDialogflowCxAgentArgsSpeechToTextSettings {
  enable_speech_adaptation?: boolean;
}

export interface GoogleDialogflowCxAgentArgsTextToSpeechSettings {
  synthesize_speech_configs?: string;
}

export interface GoogleDialogflowCxAgentArgsTimeouts {
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
  advanced_settings: GoogleDialogflowCxAgentArgsAdvancedSettings;
  git_integration_settings: GoogleDialogflowCxAgentArgsGitIntegrationSettings;
  speech_to_text_settings: GoogleDialogflowCxAgentArgsSpeechToTextSettings;
  text_to_speech_settings: GoogleDialogflowCxAgentArgsTextToSpeechSettings;
  timeouts?: GoogleDialogflowCxAgentArgsTimeouts;
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
