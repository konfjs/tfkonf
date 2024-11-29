import { TerraformConfig, TerraformResource } from "tfs";
export interface Managed {
  dns_authorizations?: string[];
  domains?: string[];
  issuance_config?: string;
}
export interface SelfManaged {
  certificate_pem?: string;
  pem_certificate?: string;
  pem_private_key?: string;
  private_key_pem?: string;
}
export interface Timeouts {
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
  managed: Managed;
  self_managed: SelfManaged;
  timeouts: Timeouts;
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