import { TerraformConfig, TerraformResource } from "tfs";
export interface PkixPublicKey {
  public_key_pem?: string;
  signature_algorithm?: string;
}
export interface PublicKeys {
  ascii_armored_pgp_public_key?: string;
  comment?: string;
  pkix_public_key: PkixPublicKey;
}
export interface AttestationAuthorityNote {
  note_reference: string;
  public_keys: PublicKeys;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBinaryAuthorizationAttestorArgs {
  description?: string;
  name: string;
  attestation_authority_note: AttestationAuthorityNote;
  timeouts: Timeouts;
}
export class google_binary_authorization_attestor extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBinaryAuthorizationAttestorArgs) {
    super(config, "resource", args, resourceName, "google_binary_authorization_attestor");
  }
}