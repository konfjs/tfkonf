import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleServiceNetworkingVpcServiceControlsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleServiceNetworkingVpcServiceControlsArgs {
  enabled: boolean;
  network: string;
  project?: string;
  service: string;
  timeouts?: GoogleServiceNetworkingVpcServiceControlsArgsTimeouts;
}

export class google_service_networking_vpc_service_controls extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleServiceNetworkingVpcServiceControlsArgs) {
    super(config, "resource", args, resourceName, "google_service_networking_vpc_service_controls");
  }
}
