import { TerraformConfig, TerraformResource } from "tfs";
export interface AllowlistedCertificates {
  pem_certificate: string;
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
export interface TrustStores {
  intermediate_cas: IntermediateCas;
  trust_anchors: TrustAnchors;
}
export interface GoogleCertificateManagerTrustConfigArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  allowlisted_certificates: AllowlistedCertificates;
  timeouts: Timeouts;
  trust_stores: TrustStores;
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