import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleContainerAnalysisOccurrenceArgsAttestationSignatures {
  public_key_id: string;
  signature?: string;
}
export interface GoogleContainerAnalysisOccurrenceArgsAttestation {
  serialized_payload: string;
  signatures: GoogleContainerAnalysisOccurrenceArgsAttestationSignatures;
}
export interface GoogleContainerAnalysisOccurrenceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleContainerAnalysisOccurrenceArgs {
  note_name: string;
  remediation?: string;
  resource_uri: string;
  attestation: GoogleContainerAnalysisOccurrenceArgsAttestation;
  timeouts: GoogleContainerAnalysisOccurrenceArgsTimeouts;
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