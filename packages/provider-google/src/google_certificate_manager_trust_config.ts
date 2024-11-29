import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCertificateManagerTrustConfigArgsAllowlistedCertificates {
  pem_certificate: string;
}
export interface GoogleCertificateManagerTrustConfigArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCertificateManagerTrustConfigArgsTrustStoresIntermediateCas {
  pem_certificate?: string;
}
export interface GoogleCertificateManagerTrustConfigArgsTrustStoresTrustAnchors {
  pem_certificate?: string;
}
export interface GoogleCertificateManagerTrustConfigArgsTrustStores {
  intermediate_cas: GoogleCertificateManagerTrustConfigArgsTrustStoresIntermediateCas;
  trust_anchors: GoogleCertificateManagerTrustConfigArgsTrustStoresTrustAnchors;
}
export interface GoogleCertificateManagerTrustConfigArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  allowlisted_certificates: GoogleCertificateManagerTrustConfigArgsAllowlistedCertificates;
  timeouts: GoogleCertificateManagerTrustConfigArgstimeouts;
  trust_stores: GoogleCertificateManagerTrustConfigArgsTrustStores;
}
export class google_certificate_manager_trust_config extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCertificateManagerTrustConfigArgs) {
    super(config, "resource", args, resourceName, "google_certificate_manager_trust_config");
  }
}