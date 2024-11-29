import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetworkManagementConnectivityTestArgsdestination {
  instance?: string;
  ip_address?: string;
  network?: string;
  port?: number;
  project_id?: string;
}
export interface GoogleNetworkManagementConnectivityTestArgssource {
  instance?: string;
  ip_address?: string;
  network?: string;
  network_type?: string;
  port?: number;
  project_id?: string;
}
export interface GoogleNetworkManagementConnectivityTestArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkManagementConnectivityTestArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  protocol?: string;
  related_projects?: string[];
  destination: GoogleNetworkManagementConnectivityTestArgsdestination;
  source: GoogleNetworkManagementConnectivityTestArgssource;
  timeouts: GoogleNetworkManagementConnectivityTestArgstimeouts;
}
export class google_network_management_connectivity_test extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkManagementConnectivityTestArgs) {
    super(config, "resource", args, resourceName, "google_network_management_connectivity_test");
  }
}