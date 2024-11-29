import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeTargetHttpProxyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeTargetHttpProxyArgs {
  description?: string;
  http_keep_alive_timeout_sec?: number;
  name: string;
  url_map: string;
  timeouts: GoogleComputeTargetHttpProxyArgstimeouts;
}
export class google_compute_target_http_proxy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly proxy_bind?: boolean;
  readonly proxy_id!: number;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeTargetHttpProxyArgs) {
    super(config, "resource", args, resourceName, "google_compute_target_http_proxy");
  }
}