import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeTargetGrpcProxyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeTargetGrpcProxyArgs {
  description?: string;
  name: string;
  url_map?: string;
  validate_for_proxyless?: boolean;
  timeouts: GoogleComputeTargetGrpcProxyArgstimeouts;
}
export class google_compute_target_grpc_proxy extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly fingerprint!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly self_link_with_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeTargetGrpcProxyArgs) {
    super(config, "resource", args, resourceName, "google_compute_target_grpc_proxy");
  }
}