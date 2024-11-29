import { TerraformConfig, TerraformResource } from "tfs";
export interface AdminUsers {
  username: string;
}
export interface Authorization {
  admin_users: AdminUsers;
}
export interface Local {
  machine_filter?: string;
}
export interface Remote {}
export interface ControlPlane {
  local: Local;
  remote: Remote;
}
export interface ControlPlaneEncryption {}
export interface Fleet {
  project: string;
}
export interface Window {}
export interface MaintenanceExclusions {
  window: Window;
}
export interface Window {}
export interface RecurringWindow {
  window: Window;
}
export interface Window {
  recurring_window: RecurringWindow;
}
export interface MaintenancePolicy {
  maintenance_exclusions: MaintenanceExclusions;
  window: Window;
}
export interface Networking {
  cluster_ipv4_cidr_blocks: string[];
  cluster_ipv6_cidr_blocks?: string[];
  services_ipv4_cidr_blocks: string[];
  services_ipv6_cidr_blocks?: string[];
}
export interface Ingress {}
export interface SystemAddonsConfig {
  ingress: Ingress;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleEdgecontainerClusterArgs {
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  authorization: Authorization;
  control_plane: ControlPlane;
  control_plane_encryption: ControlPlaneEncryption;
  fleet: Fleet;
  maintenance_policy: MaintenancePolicy;
  networking: Networking;
  system_addons_config: SystemAddonsConfig;
  timeouts: Timeouts;
}
export class google_edgecontainer_cluster extends TerraformResource {
  readonly cluster_ca_certificate!: string;
  readonly control_plane_version!: string;
  readonly create_time!: string;
  readonly default_max_pods_per_node?: number;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly endpoint!: string;
  readonly external_load_balancer_ipv4_address_pools?: string[];
  readonly id?: string;
  readonly maintenance_events!: any[];
  readonly node_version!: string;
  readonly port!: number;
  readonly project?: string;
  readonly release_channel?: string;
  readonly status!: string;
  readonly target_version?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEdgecontainerClusterArgs) {
    super(config, "resource", args, resourceName, "google_edgecontainer_cluster");
  }
}