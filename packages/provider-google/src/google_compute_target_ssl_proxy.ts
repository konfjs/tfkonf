import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeTargetSslProxyArgs {
  backend_service: string;
  certificate_map?: string;
  description?: string;
  name: string;
  proxy_header?: string;
  ssl_certificates?: string[];
  ssl_policy?: string;
  timeouts: Timeouts;
}
export class google_compute_target_ssl_proxy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly proxy_id!: number;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeTargetSslProxyArgs) {
    super(config, "resource", args, resourceName, "google_compute_target_ssl_proxy");
  }
}