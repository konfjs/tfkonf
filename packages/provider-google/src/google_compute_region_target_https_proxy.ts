import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeRegionTargetHttpsProxyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionTargetHttpsProxyArgs {
  certificate_manager_certificates?: string[];
  description?: string;
  http_keep_alive_timeout_sec?: number;
  name: string;
  server_tls_policy?: string;
  ssl_certificates?: string[];
  ssl_policy?: string;
  url_map: string;
  timeouts?: GoogleComputeRegionTargetHttpsProxyArgsTimeouts;
}
export class google_compute_region_target_https_proxy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly proxy_id!: number;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionTargetHttpsProxyArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_target_https_proxy");
  }
}