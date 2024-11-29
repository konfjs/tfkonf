import { TerraformConfig, TerraformResource } from "tfs";
export interface AdminGroups {
  group: string;
}
export interface AdminUsers {
  username: string;
}
export interface Authorization {
  admin_groups: AdminGroups;
  admin_users: AdminUsers;
}
export interface AzureServicesAuthentication {
  application_id: string;
  tenant_id: string;
}
export interface DatabaseEncryption {
  key_id: string;
}
export interface MainVolume {}
export interface ProxyConfig {
  resource_group_id: string;
  secret_id: string;
}
export interface ReplicaPlacements {
  azure_availability_zone: string;
  subnet_id: string;
}
export interface RootVolume {}
export interface SshConfig {
  authorized_key: string;
}
export interface ControlPlane {
  subnet_id: string;
  tags?: {
    [key: string]: string;
  };
  version: string;
  database_encryption: DatabaseEncryption;
  main_volume: MainVolume;
  proxy_config: ProxyConfig;
  replica_placements: ReplicaPlacements;
  root_volume: RootVolume;
  ssh_config: SshConfig;
}
export interface Fleet {}
export interface Networking {
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
  virtual_network_id: string;
}
export interface Timeouts {
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
  authorization: Authorization;
  azure_services_authentication: AzureServicesAuthentication;
  control_plane: ControlPlane;
  fleet: Fleet;
  networking: Networking;
  timeouts: Timeouts;
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