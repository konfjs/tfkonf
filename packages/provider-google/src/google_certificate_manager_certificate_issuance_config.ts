import { TerraformConfig, TerraformResource } from "tfs";
export interface CertificateAuthorityServiceConfig {
  ca_pool: string;
}
export interface CertificateAuthorityConfig {
  certificate_authority_service_config: CertificateAuthorityServiceConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCertificateManagerCertificateIssuanceConfigArgs {
  description?: string;
  key_algorithm: string;
  labels?: {
    [key: string]: string;
  };
  lifetime: string;
  location?: string;
  name: string;
  rotation_window_percentage: number;
  certificate_authority_config: CertificateAuthorityConfig;
  timeouts: Timeouts;
}
export class google_certificate_manager_certificate_issuance_config extends TerraformResource {
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
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCertificateManagerCertificateIssuanceConfigArgs) {
    super(config, "resource", args, resourceName, "google_certificate_manager_certificate_issuance_config");
  }
}