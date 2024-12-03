import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDialogflowCxSecuritySettingsArgsAudioExportSettings {
  audio_export_pattern?: string;
  audio_format?: string;
  enable_audio_redaction?: boolean;
  gcs_bucket?: string;
}
export interface GoogleDialogflowCxSecuritySettingsArgsInsightsExportSettings {
  enable_insights_export: boolean;
}
export interface GoogleDialogflowCxSecuritySettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxSecuritySettingsArgs {
  deidentify_template?: string;
  display_name: string;
  inspect_template?: string;
  location: string;
  purge_data_types?: string[];
  redaction_scope?: string;
  redaction_strategy?: string;
  retention_strategy?: string;
  retention_window_days?: number;
  audio_export_settings: GoogleDialogflowCxSecuritySettingsArgsAudioExportSettings;
  insights_export_settings: GoogleDialogflowCxSecuritySettingsArgsInsightsExportSettings;
  timeouts?: GoogleDialogflowCxSecuritySettingsArgsTimeouts;
}
export class google_dialogflow_cx_security_settings extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxSecuritySettingsArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_security_settings");
  }
}