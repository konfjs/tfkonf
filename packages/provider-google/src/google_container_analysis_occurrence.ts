import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleContainerAnalysisOccurrenceArgsattestationsignatures {
  public_key_id: string;
  signature?: string;
}
export interface GoogleContainerAnalysisOccurrenceArgsattestation {
  serialized_payload: string;
  signatures: GoogleContainerAnalysisOccurrenceArgsattestationsignatures;
}
export interface GoogleContainerAnalysisOccurrenceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleContainerAnalysisOccurrenceArgs {
  note_name: string;
  remediation?: string;
  resource_uri: string;
  attestation: GoogleContainerAnalysisOccurrenceArgsattestation;
  timeouts: GoogleContainerAnalysisOccurrenceArgstimeouts;
}
export class google_container_analysis_occurrence extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly kind!: string;
  readonly name!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerAnalysisOccurrenceArgs) {
    super(config, "resource", args, resourceName, "google_container_analysis_occurrence");
  }
}