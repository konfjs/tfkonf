import { TerraformConfig, TerraformResource } from "tfs";
export interface Aws {
  account_id: string;
}
export interface Oidc {
  allowed_audiences?: string[];
  issuer_uri: string;
  jwks_json?: string;
}
export interface Saml {
  idp_metadata_xml: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface IntermediateCas {
  pem_certificate?: string;
}
export interface TrustAnchors {
  pem_certificate?: string;
}
export interface TrustStore {
  intermediate_cas: IntermediateCas;
  trust_anchors: TrustAnchors;
}
export interface X509 {
  trust_store: TrustStore;
}
export interface GoogleIamWorkloadIdentityPoolProviderArgs {
  attribute_condition?: string;
  attribute_mapping?: {
    [key: string]: string;
  };
  description?: string;
  disabled?: boolean;
  display_name?: string;
  workload_identity_pool_id: string;
  workload_identity_pool_provider_id: string;
  aws: Aws;
  oidc: Oidc;
  saml: Saml;
  timeouts: Timeouts;
  x509: X509;
}
export class google_iam_workload_identity_pool_provider extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIamWorkloadIdentityPoolProviderArgs) {
    super(config, "resource", args, resourceName, "google_iam_workload_identity_pool_provider");
  }
}