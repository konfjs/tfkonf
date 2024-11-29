import { TerraformConfig, TerraformResource } from "tfs";
export interface Hint {
  human_readable_name: string;
}
export interface AttestationAuthority {
  hint: Hint;
}
export interface RelatedUrl {
  label?: string;
  url: string;
}
export interface Timeouts {
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
  attestation_authority: AttestationAuthority;
  related_url: RelatedUrl;
  timeouts: Timeouts;
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