import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleEdgecontainerClusterArgsauthorizationAdminUsers {
  username: string;
}
export interface GoogleEdgecontainerClusterArgsauthorization {
  admin_users: GoogleEdgecontainerClusterArgsauthorizationAdminUsers;
}
export interface GoogleEdgecontainerClusterArgsControlPlanelocal {
  machine_filter?: string;
}
export interface GoogleEdgecontainerClusterArgsControlPlaneremote {}
export interface GoogleEdgecontainerClusterArgsControlPlane {
  local: GoogleEdgecontainerClusterArgsControlPlanelocal;
  remote: GoogleEdgecontainerClusterArgsControlPlaneremote;
}
export interface GoogleEdgecontainerClusterArgsControlPlaneEncryption {}
export interface GoogleEdgecontainerClusterArgsfleet {
  project: string;
}
export interface GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusionswindow {}
export interface GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusions {
  window: GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusionswindow;
}
export interface GoogleEdgecontainerClusterArgsMaintenancePolicywindowRecurringWindowwindow {}
export interface GoogleEdgecontainerClusterArgsMaintenancePolicywindowRecurringWindow {
  window: GoogleEdgecontainerClusterArgsMaintenancePolicywindowRecurringWindowwindow;
}
export interface GoogleEdgecontainerClusterArgsMaintenancePolicywindow {
  recurring_window: GoogleEdgecontainerClusterArgsMaintenancePolicywindowRecurringWindow;
}
export interface GoogleEdgecontainerClusterArgsMaintenancePolicy {
  maintenance_exclusions: GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusions;
  window: GoogleEdgecontainerClusterArgsMaintenancePolicywindow;
}
export interface GoogleEdgecontainerClusterArgsnetworking {
  cluster_ipv4_cidr_blocks: string[];
  cluster_ipv6_cidr_blocks?: string[];
  services_ipv4_cidr_blocks: string[];
  services_ipv6_cidr_blocks?: string[];
}
export interface GoogleEdgecontainerClusterArgsSystemAddonsConfigingress {}
export interface GoogleEdgecontainerClusterArgsSystemAddonsConfig {
  ingress: GoogleEdgecontainerClusterArgsSystemAddonsConfigingress;
}
export interface GoogleEdgecontainerClusterArgstimeouts {
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
  authorization: GoogleEdgecontainerClusterArgsauthorization;
  control_plane: GoogleEdgecontainerClusterArgsControlPlane;
  control_plane_encryption: GoogleEdgecontainerClusterArgsControlPlaneEncryption;
  fleet: GoogleEdgecontainerClusterArgsfleet;
  maintenance_policy: GoogleEdgecontainerClusterArgsMaintenancePolicy;
  networking: GoogleEdgecontainerClusterArgsnetworking;
  system_addons_config: GoogleEdgecontainerClusterArgsSystemAddonsConfig;
  timeouts: GoogleEdgecontainerClusterArgstimeouts;
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