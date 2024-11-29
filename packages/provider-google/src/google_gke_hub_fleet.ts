import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleGkeHubFleetArgsDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings {
  name?: string;
}
export interface GoogleGkeHubFleetArgsDefaultClusterConfigBinaryAuthorizationConfig {
  evaluation_mode?: string;
  policy_bindings: GoogleGkeHubFleetArgsDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings;
}
export interface GoogleGkeHubFleetArgsDefaultClusterConfigSecurityPostureConfig {
  mode?: string;
  vulnerability_mode?: string;
}
export interface GoogleGkeHubFleetArgsDefaultClusterConfig {
  binary_authorization_config: GoogleGkeHubFleetArgsDefaultClusterConfigBinaryAuthorizationConfig;
  security_posture_config: GoogleGkeHubFleetArgsDefaultClusterConfigSecurityPostureConfig;
}
export interface GoogleGkeHubFleetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeHubFleetArgs {
  display_name?: string;
  default_cluster_config: GoogleGkeHubFleetArgsDefaultClusterConfig;
  timeouts?: GoogleGkeHubFleetArgsTimeouts;
}
export class google_gke_hub_fleet extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly id?: string;
  readonly project?: string;
  readonly state!: any[];
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubFleetArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_fleet");
  }
}