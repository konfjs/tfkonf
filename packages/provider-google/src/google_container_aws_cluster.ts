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
export interface BinaryAuthorization {}
export interface AwsServicesAuthentication {
  role_arn: string;
}
export interface ConfigEncryption {
  kms_key_arn: string;
}
export interface DatabaseEncryption {
  kms_key_arn: string;
}
export interface MainVolume {
  kms_key_arn?: string;
}
export interface ProxyConfig {
  secret_arn: string;
  secret_version: string;
}
export interface RootVolume {
  kms_key_arn?: string;
}
export interface SshConfig {
  ec2_key_pair: string;
}
export interface ControlPlane {
  iam_instance_profile: string;
  security_group_ids?: string[];
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
  version: string;
  aws_services_authentication: AwsServicesAuthentication;
  config_encryption: ConfigEncryption;
  database_encryption: DatabaseEncryption;
  main_volume: MainVolume;
  proxy_config: ProxyConfig;
  root_volume: RootVolume;
  ssh_config: SshConfig;
}
export interface Fleet {}
export interface Networking {
  per_node_pool_sg_rules_disabled?: boolean;
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
  vpc_id: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleContainerAwsClusterArgs {
  annotations?: {
    [key: string]: string;
  };
  aws_region: string;
  description?: string;
  location: string;
  name: string;
  authorization: Authorization;
  binary_authorization: BinaryAuthorization;
  control_plane: ControlPlane;
  fleet: Fleet;
  networking: Networking;
  timeouts: Timeouts;
}
export class google_container_aws_cluster extends TerraformResource {
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
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerAwsClusterArgs) {
    super(config, "resource", args, resourceName, "google_container_aws_cluster");
  }
}