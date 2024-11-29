import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeEnvironmentArgsNodeConfig {
  max_node_count?: string;
  min_node_count?: string;
}
export interface GoogleApigeeEnvironmentArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeEnvironmentArgs {
  description?: string;
  display_name?: string;
  forward_proxy_uri?: string;
  name: string;
  org_id: string;
  node_config: GoogleApigeeEnvironmentArgsNodeConfig;
  timeouts: GoogleApigeeEnvironmentArgstimeouts;
}
export class google_apigee_environment extends TerraformResource {
  readonly api_proxy_type?: string;
  readonly deployment_type?: string;
  readonly id?: string;
  readonly type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentArgs) {
    super(config, "resource", args, resourceName, "google_apigee_environment");
  }
}