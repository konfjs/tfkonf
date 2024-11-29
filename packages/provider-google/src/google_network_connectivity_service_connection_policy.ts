import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleNetworkConnectivityServiceConnectionPolicyArgsPscConfig {
  limit?: string;
  subnetworks: string[];
}
export interface GoogleNetworkConnectivityServiceConnectionPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkConnectivityServiceConnectionPolicyArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  network: string;
  service_class: string;
  psc_config: GoogleNetworkConnectivityServiceConnectionPolicyArgsPscConfig;
  timeouts: GoogleNetworkConnectivityServiceConnectionPolicyArgsTimeouts;
}
export class google_network_connectivity_service_connection_policy extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly infrastructure!: string;
  readonly project?: string;
  readonly psc_connections!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkConnectivityServiceConnectionPolicyArgs) {
    super(config, "resource", args, resourceName, "google_network_connectivity_service_connection_policy");
  }
}