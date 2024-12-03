import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeTargetTcpProxyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeTargetTcpProxyArgs {
  backend_service: string;
  description?: string;
  name: string;
  proxy_header?: string;
  timeouts?: GoogleComputeTargetTcpProxyArgsTimeouts;
}
export class google_compute_target_tcp_proxy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly proxy_bind?: boolean;
  readonly proxy_id!: number;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeTargetTcpProxyArgs) {
    super(config, "resource", args, resourceName, "google_compute_target_tcp_proxy");
  }
}