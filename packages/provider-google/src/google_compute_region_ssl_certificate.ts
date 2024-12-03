import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeRegionSslCertificateArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeRegionSslCertificateArgs {
  certificate: string;
  description?: string;
  private_key: string;
  timeouts?: GoogleComputeRegionSslCertificateArgsTimeouts;
}
export class google_compute_region_ssl_certificate extends TerraformResource {
  readonly certificate_id!: number;
  readonly creation_timestamp!: string;
  readonly expire_time!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionSslCertificateArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_ssl_certificate");
  }
}