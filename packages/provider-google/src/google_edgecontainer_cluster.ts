import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEdgecontainerClusterArgsAuthorizationAdminUsers {
  username: string;
}

export interface GoogleEdgecontainerClusterArgsAuthorization {
  admin_users: GoogleEdgecontainerClusterArgsAuthorizationAdminUsers;
}

export interface GoogleEdgecontainerClusterArgsControlPlaneLocal {
  machine_filter?: string;
}

export interface GoogleEdgecontainerClusterArgsControlPlaneRemote {
}

export interface GoogleEdgecontainerClusterArgsControlPlane {
  local: GoogleEdgecontainerClusterArgsControlPlaneLocal;
  remote: GoogleEdgecontainerClusterArgsControlPlaneRemote;
}

export interface GoogleEdgecontainerClusterArgsControlPlaneEncryption {
}

export interface GoogleEdgecontainerClusterArgsFleet {
  project: string;
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusionsWindow {
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusions {
  window: GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusionsWindow;
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicyWindowRecurringWindowWindow {
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicyWindowRecurringWindow {
  window: GoogleEdgecontainerClusterArgsMaintenancePolicyWindowRecurringWindowWindow;
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicyWindow {
  recurring_window: GoogleEdgecontainerClusterArgsMaintenancePolicyWindowRecurringWindow;
}

export interface GoogleEdgecontainerClusterArgsMaintenancePolicy {
  maintenance_exclusions: GoogleEdgecontainerClusterArgsMaintenancePolicyMaintenanceExclusions;
  window: GoogleEdgecontainerClusterArgsMaintenancePolicyWindow;
}

export interface GoogleEdgecontainerClusterArgsNetworking {
  cluster_ipv4_cidr_blocks: string[];
  cluster_ipv6_cidr_blocks?: string[];
  services_ipv4_cidr_blocks: string[];
  services_ipv6_cidr_blocks?: string[];
}

export interface GoogleEdgecontainerClusterArgsSystemAddonsConfigIngress {
}

export interface GoogleEdgecontainerClusterArgsSystemAddonsConfig {
  ingress: GoogleEdgecontainerClusterArgsSystemAddonsConfigIngress;
}

export interface GoogleEdgecontainerClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEdgecontainerClusterArgs {
  labels?: { [key: string]: string };
  location: string;
  name: string;
  authorization: GoogleEdgecontainerClusterArgsAuthorization;
  control_plane: GoogleEdgecontainerClusterArgsControlPlane;
  control_plane_encryption: GoogleEdgecontainerClusterArgsControlPlaneEncryption;
  fleet: GoogleEdgecontainerClusterArgsFleet;
  maintenance_policy: GoogleEdgecontainerClusterArgsMaintenancePolicy;
  networking: GoogleEdgecontainerClusterArgsNetworking;
  system_addons_config: GoogleEdgecontainerClusterArgsSystemAddonsConfig;
  timeouts?: GoogleEdgecontainerClusterArgsTimeouts;
}

export class google_edgecontainer_cluster extends TerraformResource {
  readonly cluster_ca_certificate!: string;
  readonly control_plane_version!: string;
  readonly create_time!: string;
  readonly default_max_pods_per_node?: number;
  readonly effective_labels!: { [key: string]: string };
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
  readonly terraform_labels!: { [key: string]: string };
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleEdgecontainerClusterArgs) {
    super(config, "resource", args, resourceName, "google_edgecontainer_cluster");
  }
}
