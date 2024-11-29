import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeRouterNatAddressArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRouterNatAddressArgs {
  drain_nat_ips?: string[];
  nat_ips: string[];
  router: string;
  router_nat: string;
  timeouts: GoogleComputeRouterNatAddressArgsTimeouts;
}
export class google_compute_router_nat_address extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRouterNatAddressArgs) {
    super(config, "resource", args, resourceName, "google_compute_router_nat_address");
  }
}