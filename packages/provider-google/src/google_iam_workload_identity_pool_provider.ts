import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIamWorkloadIdentityPoolProviderArgsaws {
  account_id: string;
}
export interface GoogleIamWorkloadIdentityPoolProviderArgsoidc {
  allowed_audiences?: string[];
  issuer_uri: string;
  jwks_json?: string;
}
export interface GoogleIamWorkloadIdentityPoolProviderArgssaml {
  idp_metadata_xml: string;
}
export interface GoogleIamWorkloadIdentityPoolProviderArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIamWorkloadIdentityPoolProviderArgsx509TrustStoreIntermediateCas {
  pem_certificate?: string;
}
export interface GoogleIamWorkloadIdentityPoolProviderArgsx509TrustStoreTrustAnchors {
  pem_certificate?: string;
}
export interface GoogleIamWorkloadIdentityPoolProviderArgsx509TrustStore {
  intermediate_cas: GoogleIamWorkloadIdentityPoolProviderArgsx509TrustStoreIntermediateCas;
  trust_anchors: GoogleIamWorkloadIdentityPoolProviderArgsx509TrustStoreTrustAnchors;
}
export interface GoogleIamWorkloadIdentityPoolProviderArgsx509 {
  trust_store: GoogleIamWorkloadIdentityPoolProviderArgsx509TrustStore;
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
  aws: GoogleIamWorkloadIdentityPoolProviderArgsaws;
  oidc: GoogleIamWorkloadIdentityPoolProviderArgsoidc;
  saml: GoogleIamWorkloadIdentityPoolProviderArgssaml;
  timeouts: GoogleIamWorkloadIdentityPoolProviderArgstimeouts;
  x509: GoogleIamWorkloadIdentityPoolProviderArgsx509;
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