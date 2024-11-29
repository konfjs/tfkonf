import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleCertificateManagerDnsAuthorizationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCertificateManagerDnsAuthorizationArgs {
  description?: string;
  domain: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  name: string;
  timeouts: GoogleCertificateManagerDnsAuthorizationArgsTimeouts;
}
export class google_certificate_manager_dns_authorization extends TerraformResource {
  readonly dns_resource_record!: any[];
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCertificateManagerDnsAuthorizationArgs) {
    super(config, "resource", args, resourceName, "google_certificate_manager_dns_authorization");
  }
}