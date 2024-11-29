import { TerraformConfig, TerraformResource } from "tfs";
export interface AccessConfig {
  bootstrap_cluster_creator_admin_permissions?: boolean;
}
export interface Provider {
  key_arn: string;
}
export interface EncryptionConfig {
  resources: string[];
  provider: Provider;
}
export interface KubernetesNetworkConfig {}
export interface ControlPlanePlacement {
  group_name: string;
}
export interface OutpostConfig {
  control_plane_instance_type: string;
  outpost_arns: string[];
  control_plane_placement: ControlPlanePlacement;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface UpgradePolicy {}
export interface VpcConfig {
  endpoint_private_access?: boolean;
  endpoint_public_access?: boolean;
  security_group_ids?: string[];
  subnet_ids: string[];
}
export interface ZonalShiftConfig {
  enabled?: boolean;
}
export interface AwsEksClusterArgs {
  bootstrap_self_managed_addons?: boolean;
  enabled_cluster_log_types?: string[];
  name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  access_config: AccessConfig;
  encryption_config: EncryptionConfig;
  kubernetes_network_config: KubernetesNetworkConfig;
  outpost_config: OutpostConfig;
  timeouts: Timeouts;
  upgrade_policy: UpgradePolicy;
  vpc_config: VpcConfig;
  zonal_shift_config: ZonalShiftConfig;
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
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEksClusterArgs) {
    super(config, "resource", args, resourceName, "aws_eks_cluster");
  }
}