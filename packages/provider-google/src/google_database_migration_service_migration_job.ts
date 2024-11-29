import { TerraformConfig, TerraformResource } from "tfs";
export interface DumpFlags {
  name?: string;
  value?: string;
}
export interface DumpFlags {
  dump_flags: DumpFlags;
}
export interface PerformanceConfig {
  dump_parallel_level?: string;
}
export interface ReverseSshConnectivity {
  vm?: string;
  vm_ip?: string;
  vm_port?: number;
  vpc?: string;
}
export interface StaticIpConnectivity {}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VpcPeeringConnectivity {
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
  dump_flags: DumpFlags;
  performance_config: PerformanceConfig;
  reverse_ssh_connectivity: ReverseSshConnectivity;
  static_ip_connectivity: StaticIpConnectivity;
  timeouts: Timeouts;
  vpc_peering_connectivity: VpcPeeringConnectivity;
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