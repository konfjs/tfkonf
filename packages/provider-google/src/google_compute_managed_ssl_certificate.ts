import { TerraformConfig, TerraformResource } from "tfs";
export interface Managed {
  domains: string[];
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeManagedSslCertificateArgs {
  description?: string;
  name?: string;
  type?: string;
  managed: Managed;
  timeouts: Timeouts;
}
export class google_compute_managed_ssl_certificate extends TerraformResource {
  readonly certificate_id!: number;
  readonly creation_timestamp!: string;
  readonly expire_time!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly subject_alternative_names!: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeManagedSslCertificateArgs) {
    super(config, "resource", args, resourceName, "google_compute_managed_ssl_certificate");
  }
}