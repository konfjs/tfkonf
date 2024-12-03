import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleNetworkConnectivityInternalRangeArgsMigration {
  source: string;
  target: string;
}
export interface GoogleNetworkConnectivityInternalRangeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkConnectivityInternalRangeArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  network: string;
  overlaps?: string[];
  peering: string;
  prefix_length?: number;
  target_cidr_range?: string[];
  usage: string;
  migration: GoogleNetworkConnectivityInternalRangeArgsMigration;
  timeouts?: GoogleNetworkConnectivityInternalRangeArgsTimeouts;
}
export class google_network_connectivity_internal_range extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly ip_cidr_range?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly users!: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivityInternalRangeArgs) {
    super(config, "resource", args, resourceName, "google_network_connectivity_internal_range");
  }
}