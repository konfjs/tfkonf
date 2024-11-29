import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeRegionTargetHttpProxyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionTargetHttpProxyArgs {
  description?: string;
  http_keep_alive_timeout_sec?: number;
  name: string;
  url_map: string;
  timeouts: GoogleComputeRegionTargetHttpProxyArgstimeouts;
}
export class google_compute_region_target_http_proxy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly proxy_id!: number;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionTargetHttpProxyArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_target_http_proxy");
  }
}