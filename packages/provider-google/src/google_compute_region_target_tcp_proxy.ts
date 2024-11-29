import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeRegionTargetTcpProxyArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeRegionTargetTcpProxyArgs {
  backend_service: string;
  description?: string;
  name: string;
  proxy_header?: string;
  timeouts: GoogleComputeRegionTargetTcpProxyArgsTimeouts;
}
export class google_compute_region_target_tcp_proxy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly proxy_bind?: boolean;
  readonly proxy_id!: number;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionTargetTcpProxyArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_target_tcp_proxy");
  }
}