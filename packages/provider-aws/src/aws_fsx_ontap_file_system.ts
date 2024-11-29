import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsFsxOntapFileSystemArgsDiskIopsConfiguration {
  mode?: string;
}
export interface AwsFsxOntapFileSystemArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFsxOntapFileSystemArgs {
  automatic_backup_retention_days?: number;
  deployment_type: string;
  fsx_admin_password?: string;
  preferred_subnet_id: string;
  security_group_ids?: string[];
  storage_capacity: number;
  storage_type?: string;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
  disk_iops_configuration: AwsFsxOntapFileSystemArgsDiskIopsConfiguration;
  timeouts: AwsFsxOntapFileSystemArgsTimeouts;
}
export class aws_fsx_ontap_file_system extends TerraformResource {
  readonly arn!: string;
  readonly daily_automatic_backup_start_time?: string;
  readonly dns_name!: string;
  readonly endpoint_ip_address_range?: string;
  readonly endpoints!: any[];
  readonly ha_pairs?: number;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly network_interface_ids!: string[];
  readonly owner_id!: string;
  readonly route_table_ids?: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly throughput_capacity?: number;
  readonly throughput_capacity_per_ha_pair?: number;
  readonly vpc_id!: string;
  readonly weekly_maintenance_start_time?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxOntapFileSystemArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_ontap_file_system");
  }
}