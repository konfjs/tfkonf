import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleContainerAnalysisNoteArgsAttestationAuthorityHint {
  human_readable_name: string;
}
export interface GoogleContainerAnalysisNoteArgsAttestationAuthority {
  hint: GoogleContainerAnalysisNoteArgsAttestationAuthorityHint;
}
export interface GoogleContainerAnalysisNoteArgsRelatedUrl {
  label?: string;
  url: string;
}
export interface GoogleContainerAnalysisNoteArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleContainerAnalysisNoteArgs {
  expiration_time?: string;
  long_description?: string;
  name: string;
  related_note_names?: string[];
  short_description?: string;
  attestation_authority: GoogleContainerAnalysisNoteArgsAttestationAuthority;
  related_url: GoogleContainerAnalysisNoteArgsRelatedUrl;
  timeouts: GoogleContainerAnalysisNoteArgsTimeouts;
}
export class google_container_analysis_note extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly kind!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerAnalysisNoteArgs) {
    super(config, "resource", args, resourceName, "google_container_analysis_note");
  }
}