import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNotePublicKeysPkixPublicKey {
  public_key_pem?: string;
  signature_algorithm?: string;
}
export interface GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNotePublicKeys {
  ascii_armored_pgp_public_key?: string;
  comment?: string;
  pkix_public_key: GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNotePublicKeysPkixPublicKey;
}
export interface GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNote {
  note_reference: string;
  public_keys: GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNotePublicKeys;
}
export interface GoogleBinaryAuthorizationAttestorArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBinaryAuthorizationAttestorArgs {
  description?: string;
  name: string;
  attestation_authority_note: GoogleBinaryAuthorizationAttestorArgsAttestationAuthorityNote;
  timeouts?: GoogleBinaryAuthorizationAttestorArgsTimeouts;
}
export class google_binary_authorization_attestor extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBinaryAuthorizationAttestorArgs) {
    super(config, "resource", args, resourceName, "google_binary_authorization_attestor");
  }
}