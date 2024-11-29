import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsFsxLustreFileSystemArgsLogConfiguration {
  level?: string;
}
export interface AwsFsxLustreFileSystemArgsMetadataConfiguration {}
export interface AwsFsxLustreFileSystemArgsRootSquashConfiguration {
  no_squash_nids?: string[];
  root_squash?: string;
}
export interface AwsFsxLustreFileSystemArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFsxLustreFileSystemArgs {
  backup_id?: string;
  copy_tags_to_backups?: boolean;
  data_compression_type?: string;
  deployment_type?: string;
  drive_cache_type?: string;
  final_backup_tags?: {
    [key: string]: string;
  };
  import_path?: string;
  per_unit_storage_throughput?: number;
  security_group_ids?: string[];
  skip_final_backup?: boolean;
  storage_capacity?: number;
  storage_type?: string;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
  log_configuration: AwsFsxLustreFileSystemArgsLogConfiguration;
  metadata_configuration: AwsFsxLustreFileSystemArgsMetadataConfiguration;
  root_squash_configuration: AwsFsxLustreFileSystemArgsRootSquashConfiguration;
  timeouts?: AwsFsxLustreFileSystemArgsTimeouts;
}
export class aws_fsx_lustre_file_system extends TerraformResource {
  readonly arn!: string;
  readonly auto_import_policy?: string;
  readonly automatic_backup_retention_days?: number;
  readonly daily_automatic_backup_start_time?: string;
  readonly dns_name!: string;
  readonly export_path?: string;
  readonly file_system_type_version?: string;
  readonly id?: string;
  readonly imported_file_chunk_size?: number;
  readonly kms_key_id?: string;
  readonly mount_name!: string;
  readonly network_interface_ids!: string[];
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  readonly weekly_maintenance_start_time?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxLustreFileSystemArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_lustre_file_system");
  }
}