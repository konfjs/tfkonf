import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeTargetHttpsProxyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeTargetHttpsProxyArgs {
  certificate_manager_certificates?: string[];
  certificate_map?: string;
  description?: string;
  http_keep_alive_timeout_sec?: number;
  name: string;
  quic_override?: string;
  server_tls_policy?: string;
  ssl_certificates?: string[];
  ssl_policy?: string;
  url_map: string;
  timeouts: GoogleComputeTargetHttpsProxyArgsTimeouts;
}
export class google_compute_target_https_proxy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly proxy_bind?: boolean;
  readonly proxy_id!: number;
  readonly self_link!: string;
  readonly tls_early_data?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeTargetHttpsProxyArgs) {
    super(config, "resource", args, resourceName, "google_compute_target_https_proxy");
  }
}