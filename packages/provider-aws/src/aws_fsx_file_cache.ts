import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsFsxFileCacheArgsDataRepositoryAssociationNfs {
  dns_ips?: string[];
  version: string;
}
export interface AwsFsxFileCacheArgsDataRepositoryAssociation {
  data_repository_path: string;
  data_repository_subdirectories?: string[];
  file_cache_path: string;
  nfs: AwsFsxFileCacheArgsDataRepositoryAssociationNfs;
}
export interface AwsFsxFileCacheArgsLustreConfigurationMetadataConfiguration {
  storage_capacity: number;
}
export interface AwsFsxFileCacheArgsLustreConfiguration {
  deployment_type: string;
  per_unit_storage_throughput: number;
  weekly_maintenance_start_time?: string;
  metadata_configuration: AwsFsxFileCacheArgsLustreConfigurationMetadataConfiguration;
}
export interface AwsFsxFileCacheArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFsxFileCacheArgs {
  copy_tags_to_data_repository_associations?: boolean;
  file_cache_type: string;
  file_cache_type_version: string;
  security_group_ids?: string[];
  storage_capacity: number;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
  data_repository_association: AwsFsxFileCacheArgsDataRepositoryAssociation;
  lustre_configuration: AwsFsxFileCacheArgsLustreConfiguration;
  timeouts: AwsFsxFileCacheArgsTimeouts;
}
export class aws_fsx_file_cache extends TerraformResource {
  readonly arn!: string;
  readonly data_repository_association_ids!: string[];
  readonly dns_name!: string;
  readonly file_cache_id!: string;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly network_interface_ids!: string[];
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxFileCacheArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_file_cache");
  }
}