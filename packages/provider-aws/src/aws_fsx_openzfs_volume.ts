import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsFsxOpenzfsVolumeArgsNfsExportsClientConfigurations {
  clients: string;
  options: string[];
}
export interface AwsFsxOpenzfsVolumeArgsNfsExports {
  client_configurations: AwsFsxOpenzfsVolumeArgsNfsExportsClientConfigurations;
}
export interface AwsFsxOpenzfsVolumeArgsOriginSnapshot {
  copy_strategy: string;
  snapshot_arn: string;
}
export interface AwsFsxOpenzfsVolumeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFsxOpenzfsVolumeArgsUserAndGroupQuotas {
  id: number;
  storage_capacity_quota_gib: number;
  type: string;
}
export interface AwsFsxOpenzfsVolumeArgs {
  copy_tags_to_snapshots?: boolean;
  data_compression_type?: string;
  delete_volume_options?: string[];
  name: string;
  parent_volume_id: string;
  record_size_kib?: number;
  tags?: {
    [key: string]: string;
  };
  volume_type?: string;
  nfs_exports: AwsFsxOpenzfsVolumeArgsNfsExports;
  origin_snapshot: AwsFsxOpenzfsVolumeArgsOriginSnapshot;
  timeouts: AwsFsxOpenzfsVolumeArgsTimeouts;
  user_and_group_quotas: AwsFsxOpenzfsVolumeArgsUserAndGroupQuotas;
}
export class aws_fsx_openzfs_volume extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly read_only?: boolean;
  readonly storage_capacity_quota_gib?: number;
  readonly storage_capacity_reservation_gib?: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxOpenzfsVolumeArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_openzfs_volume");
  }
}