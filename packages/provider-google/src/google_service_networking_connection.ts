import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleServiceNetworkingConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleServiceNetworkingConnectionArgs {
  deletion_policy?: string;
  network: string;
  reserved_peering_ranges: string[];
  service: string;
  update_on_creation_fail?: boolean;
  timeouts?: GoogleServiceNetworkingConnectionArgsTimeouts;
}
export class google_service_networking_connection extends TerraformResource {
  readonly id?: string;
  readonly peering!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleServiceNetworkingConnectionArgs) {
    super(config, "resource", args, resourceName, "google_service_networking_connection");
  }
}