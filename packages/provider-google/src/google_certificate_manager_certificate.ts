import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleCertificateManagerCertificateArgsManaged {
  dns_authorizations?: string[];
  domains?: string[];
  issuance_config?: string;
}
export interface GoogleCertificateManagerCertificateArgsSelfManaged {
  certificate_pem?: string;
  pem_certificate?: string;
  pem_private_key?: string;
  private_key_pem?: string;
}
export interface GoogleCertificateManagerCertificateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCertificateManagerCertificateArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  name: string;
  scope?: string;
  managed: GoogleCertificateManagerCertificateArgsManaged;
  self_managed: GoogleCertificateManagerCertificateArgsSelfManaged;
  timeouts?: GoogleCertificateManagerCertificateArgsTimeouts;
}
export class google_certificate_manager_certificate extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly san_dnsnames!: string[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCertificateManagerCertificateArgs) {
    super(config, "resource", args, resourceName, "google_certificate_manager_certificate");
  }
}