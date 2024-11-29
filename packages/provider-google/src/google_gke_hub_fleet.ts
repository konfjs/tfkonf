import { TerraformConfig, TerraformResource } from "tfs";
export interface PolicyBindings {
  name?: string;
}
export interface BinaryAuthorizationConfig {
  evaluation_mode?: string;
  policy_bindings: PolicyBindings;
}
export interface SecurityPostureConfig {
  mode?: string;
  vulnerability_mode?: string;
}
export interface DefaultClusterConfig {
  binary_authorization_config: BinaryAuthorizationConfig;
  security_posture_config: SecurityPostureConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeHubFleetArgs {
  display_name?: string;
  default_cluster_config: DefaultClusterConfig;
  timeouts: Timeouts;
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