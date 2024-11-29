import { TerraformConfig, TerraformResource } from "tfs";
export interface NfsExportOptions {
  access_mode?: string;
  anon_gid?: number;
  anon_uid?: number;
  ip_ranges?: string[];
  squash_mode?: string;
}
export interface FileShares {
  capacity_gb: number;
  name: string;
  source_backup?: string;
  nfs_export_options: NfsExportOptions;
}
export interface Networks {
  connect_mode?: string;
  modes: string[];
  network: string;
}
export interface FixedIops {
  max_iops?: number;
}
export interface IopsPerTb {
  max_iops_per_tb?: number;
}
export interface PerformanceConfig {
  fixed_iops: FixedIops;
  iops_per_tb: IopsPerTb;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleFilestoreInstanceArgs {
  deletion_protection_enabled?: boolean;
  deletion_protection_reason?: string;
  description?: string;
  kms_key_name?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  protocol?: string;
  tier: string;
  file_shares: FileShares;
  networks: Networks;
  performance_config: PerformanceConfig;
  timeouts: Timeouts;
}
export class google_filestore_instance extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFilestoreInstanceArgs) {
    super(config, "resource", args, resourceName, "google_filestore_instance");
  }
}