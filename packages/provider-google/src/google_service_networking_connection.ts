import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleServiceNetworkingConnectionArgstimeouts {
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
  timeouts: GoogleServiceNetworkingConnectionArgstimeouts;
}
export class google_service_networking_connection extends TerraformResource {
  readonly id?: string;
  readonly peering!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleServiceNetworkingConnectionArgs) {
    super(config, "resource", args, resourceName, "google_service_networking_connection");
  }
}