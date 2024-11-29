import { TerraformConfig, TerraformResource } from "tfs";
export interface ClientConfigurations {
  clients: string;
  options: string[];
}
export interface NfsExports {
  client_configurations: ClientConfigurations;
}
export interface OriginSnapshot {
  copy_strategy: string;
  snapshot_arn: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface UserAndGroupQuotas {
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
  nfs_exports: NfsExports;
  origin_snapshot: OriginSnapshot;
  timeouts: Timeouts;
  user_and_group_quotas: UserAndGroupQuotas;
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