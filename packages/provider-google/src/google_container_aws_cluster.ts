import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleContainerAwsClusterArgsauthorizationAdminGroups {
  group: string;
}
export interface GoogleContainerAwsClusterArgsauthorizationAdminUsers {
  username: string;
}
export interface GoogleContainerAwsClusterArgsauthorization {
  admin_groups: GoogleContainerAwsClusterArgsauthorizationAdminGroups;
  admin_users: GoogleContainerAwsClusterArgsauthorizationAdminUsers;
}
export interface GoogleContainerAwsClusterArgsBinaryAuthorization {}
export interface GoogleContainerAwsClusterArgsControlPlaneAwsServicesAuthentication {
  role_arn: string;
}
export interface GoogleContainerAwsClusterArgsControlPlaneConfigEncryption {
  kms_key_arn: string;
}
export interface GoogleContainerAwsClusterArgsControlPlaneDatabaseEncryption {
  kms_key_arn: string;
}
export interface GoogleContainerAwsClusterArgsControlPlaneMainVolume {
  kms_key_arn?: string;
}
export interface GoogleContainerAwsClusterArgsControlPlaneProxyConfig {
  secret_arn: string;
  secret_version: string;
}
export interface GoogleContainerAwsClusterArgsControlPlaneRootVolume {
  kms_key_arn?: string;
}
export interface GoogleContainerAwsClusterArgsControlPlaneSshConfig {
  ec2_key_pair: string;
}
export interface GoogleContainerAwsClusterArgsControlPlane {
  iam_instance_profile: string;
  security_group_ids?: string[];
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
  version: string;
  aws_services_authentication: GoogleContainerAwsClusterArgsControlPlaneAwsServicesAuthentication;
  config_encryption: GoogleContainerAwsClusterArgsControlPlaneConfigEncryption;
  database_encryption: GoogleContainerAwsClusterArgsControlPlaneDatabaseEncryption;
  main_volume: GoogleContainerAwsClusterArgsControlPlaneMainVolume;
  proxy_config: GoogleContainerAwsClusterArgsControlPlaneProxyConfig;
  root_volume: GoogleContainerAwsClusterArgsControlPlaneRootVolume;
  ssh_config: GoogleContainerAwsClusterArgsControlPlaneSshConfig;
}
export interface GoogleContainerAwsClusterArgsfleet {}
export interface GoogleContainerAwsClusterArgsnetworking {
  per_node_pool_sg_rules_disabled?: boolean;
  pod_address_cidr_blocks: string[];
  service_address_cidr_blocks: string[];
  vpc_id: string;
}
export interface GoogleContainerAwsClusterArgstimeouts {
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
  authorization: GoogleContainerAwsClusterArgsauthorization;
  binary_authorization: GoogleContainerAwsClusterArgsBinaryAuthorization;
  control_plane: GoogleContainerAwsClusterArgsControlPlane;
  fleet: GoogleContainerAwsClusterArgsfleet;
  networking: GoogleContainerAwsClusterArgsnetworking;
  timeouts: GoogleContainerAwsClusterArgstimeouts;
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