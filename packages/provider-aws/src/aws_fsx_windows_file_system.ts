import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsFsxWindowsFileSystemArgsAuditLogConfiguration {
  file_access_audit_log_level?: string;
  file_share_access_audit_log_level?: string;
}
export interface AwsFsxWindowsFileSystemArgsDiskIopsConfiguration {
  mode?: string;
}
export interface AwsFsxWindowsFileSystemArgsSelfManagedActiveDirectory {
  dns_ips: string[];
  domain_name: string;
  file_system_administrators_group?: string;
  organizational_unit_distinguished_name?: string;
  password: string;
  username: string;
}
export interface AwsFsxWindowsFileSystemArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFsxWindowsFileSystemArgs {
  active_directory_id?: string;
  aliases?: string[];
  automatic_backup_retention_days?: number;
  backup_id?: string;
  copy_tags_to_backups?: boolean;
  deployment_type?: string;
  final_backup_tags?: {
    [key: string]: string;
  };
  security_group_ids?: string[];
  skip_final_backup?: boolean;
  storage_type?: string;
  subnet_ids: string[];
  tags?: {
    [key: string]: string;
  };
  throughput_capacity: number;
  audit_log_configuration: AwsFsxWindowsFileSystemArgsAuditLogConfiguration;
  disk_iops_configuration: AwsFsxWindowsFileSystemArgsDiskIopsConfiguration;
  self_managed_active_directory: AwsFsxWindowsFileSystemArgsSelfManagedActiveDirectory;
  timeouts?: AwsFsxWindowsFileSystemArgsTimeouts;
}
export class aws_fsx_windows_file_system extends TerraformResource {
  readonly arn!: string;
  readonly daily_automatic_backup_start_time?: string;
  readonly dns_name!: string;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly network_interface_ids!: string[];
  readonly owner_id!: string;
  readonly preferred_file_server_ip!: string;
  readonly preferred_subnet_id?: string;
  readonly remote_administration_endpoint!: string;
  readonly storage_capacity?: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  readonly weekly_maintenance_start_time?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxWindowsFileSystemArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_windows_file_system");
  }
}