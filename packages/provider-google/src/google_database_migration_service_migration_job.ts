import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDatabaseMigrationServiceMigrationJobArgsDumpFlagsDumpFlags {
  name?: string;
  value?: string;
}
export interface GoogleDatabaseMigrationServiceMigrationJobArgsDumpFlags {
  dump_flags: GoogleDatabaseMigrationServiceMigrationJobArgsDumpFlagsDumpFlags;
}
export interface GoogleDatabaseMigrationServiceMigrationJobArgsPerformanceConfig {
  dump_parallel_level?: string;
}
export interface GoogleDatabaseMigrationServiceMigrationJobArgsReverseSshConnectivity {
  vm?: string;
  vm_ip?: string;
  vm_port?: number;
  vpc?: string;
}
export interface GoogleDatabaseMigrationServiceMigrationJobArgsStaticIpConnectivity {}
export interface GoogleDatabaseMigrationServiceMigrationJobArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDatabaseMigrationServiceMigrationJobArgsVpcPeeringConnectivity {
  vpc?: string;
}
export interface GoogleDatabaseMigrationServiceMigrationJobArgs {
  destination: string;
  display_name?: string;
  dump_path?: string;
  dump_type?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  migration_job_id: string;
  source: string;
  type: string;
  dump_flags: GoogleDatabaseMigrationServiceMigrationJobArgsDumpFlags;
  performance_config: GoogleDatabaseMigrationServiceMigrationJobArgsPerformanceConfig;
  reverse_ssh_connectivity: GoogleDatabaseMigrationServiceMigrationJobArgsReverseSshConnectivity;
  static_ip_connectivity: GoogleDatabaseMigrationServiceMigrationJobArgsStaticIpConnectivity;
  timeouts: GoogleDatabaseMigrationServiceMigrationJobArgsTimeouts;
  vpc_peering_connectivity: GoogleDatabaseMigrationServiceMigrationJobArgsVpcPeeringConnectivity;
}
export class google_database_migration_service_migration_job extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly error!: any[];
  readonly id?: string;
  readonly name!: string;
  readonly phase!: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDatabaseMigrationServiceMigrationJobArgs) {
    super(config, "resource", args, resourceName, "google_database_migration_service_migration_job");
  }
}