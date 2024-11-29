import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeSslCertificateArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeSslCertificateArgs {
  certificate: string;
  description?: string;
  private_key: string;
  timeouts: GoogleComputeSslCertificateArgsTimeouts;
}
export class google_compute_ssl_certificate extends TerraformResource {
  readonly certificate_id!: number;
  readonly creation_timestamp!: string;
  readonly expire_time!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeSslCertificateArgs) {
    super(config, "resource", args, resourceName, "google_compute_ssl_certificate");
  }
}