import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleContainerAzureClusterArgsAuthorizationAdminGroups {
  group: string;
}
export interface GoogleContainerAzureClusterArgsAuthorizationAdminUsers {
  username: string;
}
export interface GoogleContainerAzureClusterArgsAuthorization {
  admin_groups: GoogleContainerAzureClusterArgsAuthorizationAdminGroups;
  admin_users: GoogleContainerAzureClusterArgsAuthorizationAdminUsers;
}
export interface GoogleContainerAzureClusterArgsAzureServicesAuthentication {
  application_id: string;
  tenant_id: string;
}
export interface GoogleContainerAzureClusterArgsControlPlaneDatabaseEncryption {
  key_id: string;
}
export interface GoogleContainerAzureClusterArgsControlPlaneMainVolume {}
export interface GoogleContainerAzureClusterArgsControlPlaneProxyConfig {
  resource_group_id: string;
  secret_id: string;
}
export interface GoogleContainerAzureClusterArgsControlPlaneReplicaPlacements {
  azure_availability_zone: string;
  subnet_id: string;
}
export interface GoogleContainerAzureClusterArgsControlPlaneRootVolume {}
export interface GoogleContainerAzureClusterArgsControlPlaneSshConfig {
  authorized_key: string;
}
export interface GoogleContainerAzureClusterArgsControlPlane {
  subnet_id: string;
  tags?: {
    [key: string]: string;
  };
  version: string;
  database_encryption: GoogleContainerAzureClusterArgsControlPlaneDatabaseEncryption;
  main_volume: GoogleContainerAzureClusterArgsControlPlaneMainVolume;
  proxy_config: GoogleContainerAzureClusterArgsControlPlaneProxyConfig;
  replica_placements: GoogleContainerAzureClusterArgsControlPlaneReplicaPlacements;
  root_volume: GoogleContainerAzureClusterArgsControlPlaneRootVolume;
  ssh_config: GoogleContainerAzureClusterArgsControlPlaneSshConfig;
}
export interface GoogleContainerAzureClusterArgsFleet {}
export interface GoogleContainerAzureClusterArgsNetworking {
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
  virtual_network_id: string;
}
export interface GoogleContainerAzureClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleContainerAzureClusterArgs {
  annotations?: {
    [key: string]: string;
  };
  azure_region: string;
  client?: string;
  description?: string;
  location: string;
  name: string;
  resource_group_id: string;
  authorization: GoogleContainerAzureClusterArgsAuthorization;
  azure_services_authentication: GoogleContainerAzureClusterArgsAzureServicesAuthentication;
  control_plane: GoogleContainerAzureClusterArgsControlPlane;
  fleet: GoogleContainerAzureClusterArgsFleet;
  networking: GoogleContainerAzureClusterArgsNetworking;
  timeouts: GoogleContainerAzureClusterArgsTimeouts;
}
export class google_container_azure_cluster extends TerraformResource {
  readonly create_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly endpoint!: string;
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly state!: string;
  readonly uid!: string;
  readonly update_time!: string;
  readonly workload_identity_config!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerAzureClusterArgs) {
    super(config, "resource", args, resourceName, "google_container_azure_cluster");
  }
}