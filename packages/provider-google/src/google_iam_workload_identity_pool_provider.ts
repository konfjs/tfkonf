import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIamWorkloadIdentityPoolProviderArgsAws {
  account_id: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsOidc {
  allowed_audiences?: string[];
  issuer_uri: string;
  jwks_json?: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsSaml {
  idp_metadata_xml: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStoreIntermediateCas {
  pem_certificate?: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStoreTrustAnchors {
  pem_certificate?: string;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStore {
  intermediate_cas: GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStoreIntermediateCas;
  trust_anchors: GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStoreTrustAnchors;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgsX509 {
  trust_store: GoogleIamWorkloadIdentityPoolProviderArgsX509TrustStore;
}

export interface GoogleIamWorkloadIdentityPoolProviderArgs {
  attribute_condition?: string;
  attribute_mapping?: { [key: string]: string };
  description?: string;
  disabled?: boolean;
  display_name?: string;
  workload_identity_pool_id: string;
  workload_identity_pool_provider_id: string;
  aws: GoogleIamWorkloadIdentityPoolProviderArgsAws;
  oidc: GoogleIamWorkloadIdentityPoolProviderArgsOidc;
  saml: GoogleIamWorkloadIdentityPoolProviderArgsSaml;
  timeouts?: GoogleIamWorkloadIdentityPoolProviderArgsTimeouts;
  x509: GoogleIamWorkloadIdentityPoolProviderArgsX509;
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
