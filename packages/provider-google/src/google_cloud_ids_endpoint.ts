import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudIdsEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudIdsEndpointArgs {
  description?: string;
  location: string;
  name: string;
  network: string;
  severity: string;
  threat_exceptions?: string[];
  timeouts?: GoogleCloudIdsEndpointArgsTimeouts;
}

export class google_cloud_ids_endpoint extends TerraformResource {
  readonly create_time!: string;
  readonly endpoint_forwarding_rule!: string;
  readonly endpoint_ip!: string;
  readonly id?: string;
  readonly project?: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudIdsEndpointArgs) {
    super(config, "resource", args, resourceName, "google_cloud_ids_endpoint");
  }
}
