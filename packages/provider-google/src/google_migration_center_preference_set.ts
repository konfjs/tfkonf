import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AllowedMachineSeries {
  code?: string;
}
export interface MachinePreferences {
  allowed_machine_series: AllowedMachineSeries;
}
export interface ComputeEnginePreferences {
  license_type?: string;
  machine_preferences: MachinePreferences;
}
export interface RegionPreferences {
  preferred_regions?: string[];
}
export interface NodeTypes {
  node_name?: string;
}
export interface SoleTenancyPreferences {
  commitment_plan?: string;
  cpu_overcommit_ratio?: number;
  host_maintenance_policy?: string;
  node_types: NodeTypes;
}
export interface VmwareEnginePreferences {
  commitment_plan?: string;
  cpu_overcommit_ratio?: number;
  memory_overcommit_ratio?: number;
  storage_deduplication_compression_ratio?: number;
}
export interface VirtualMachinePreferences {
  commitment_plan?: string;
  sizing_optimization_strategy?: string;
  target_product?: string;
  compute_engine_preferences: ComputeEnginePreferences;
  region_preferences: RegionPreferences;
  sole_tenancy_preferences: SoleTenancyPreferences;
  vmware_engine_preferences: VmwareEnginePreferences;
}
export interface GoogleMigrationCenterPreferenceSetArgs {
  description?: string;
  display_name?: string;
  location: string;
  preference_set_id: string;
  timeouts: Timeouts;
  virtual_machine_preferences: VirtualMachinePreferences;
}
export class google_migration_center_preference_set extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMigrationCenterPreferenceSetArgs) {
    super(config, "resource", args, resourceName, "google_migration_center_preference_set");
  }
}