import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEksClusterArgsAccessConfig {
  bootstrap_cluster_creator_admin_permissions?: boolean;
}

export interface AwsEksClusterArgsEncryptionConfigProvider {
  key_arn: string;
}

export interface AwsEksClusterArgsEncryptionConfig {
  resources: string[];
  provider: AwsEksClusterArgsEncryptionConfigProvider;
}

export interface AwsEksClusterArgsKubernetesNetworkConfig {
}

export interface AwsEksClusterArgsOutpostConfigControlPlanePlacement {
  group_name: string;
}

export interface AwsEksClusterArgsOutpostConfig {
  control_plane_instance_type: string;
  outpost_arns: string[];
  control_plane_placement: AwsEksClusterArgsOutpostConfigControlPlanePlacement;
}

export interface AwsEksClusterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsEksClusterArgsUpgradePolicy {
}

export interface AwsEksClusterArgsVpcConfig {
  endpoint_private_access?: boolean;
  endpoint_public_access?: boolean;
  security_group_ids?: string[];
  subnet_ids: string[];
}

export interface AwsEksClusterArgsZonalShiftConfig {
  enabled?: boolean;
}

export interface AwsEksClusterArgs {
  bootstrap_self_managed_addons?: boolean;
  enabled_cluster_log_types?: string[];
  name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  access_config: AwsEksClusterArgsAccessConfig;
  encryption_config: AwsEksClusterArgsEncryptionConfig;
  kubernetes_network_config: AwsEksClusterArgsKubernetesNetworkConfig;
  outpost_config: AwsEksClusterArgsOutpostConfig;
  timeouts?: AwsEksClusterArgsTimeouts;
  upgrade_policy: AwsEksClusterArgsUpgradePolicy;
  vpc_config: AwsEksClusterArgsVpcConfig;
  zonal_shift_config: AwsEksClusterArgsZonalShiftConfig;
}

export class aws_eks_cluster extends TerraformResource {
  readonly arn!: string;
  readonly certificate_authority!: any[];
  readonly cluster_id!: string;
  readonly created_at!: string;
  readonly endpoint!: string;
  readonly id?: string;
  readonly identity!: any[];
  readonly platform_version!: string;
  readonly status!: string;
  readonly tags_all?: { [key: string]: string };
  readonly version?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEksClusterArgs) {
    super(config, "resource", args, resourceName, "aws_eks_cluster");
  }
}
