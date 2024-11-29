import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleMigrationCenterPreferenceSetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries {
  code?: string;
}
export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences {
  allowed_machine_series: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries;
}
export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferences {
  license_type?: string;
  machine_preferences: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences;
}
export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesRegionPreferences {
  preferred_regions?: string[];
}
export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes {
  node_name?: string;
}
export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesSoleTenancyPreferences {
  commitment_plan?: string;
  cpu_overcommit_ratio?: number;
  host_maintenance_policy?: string;
  node_types: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes;
}
export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesVmwareEnginePreferences {
  commitment_plan?: string;
  cpu_overcommit_ratio?: number;
  memory_overcommit_ratio?: number;
  storage_deduplication_compression_ratio?: number;
}
export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferences {
  commitment_plan?: string;
  sizing_optimization_strategy?: string;
  target_product?: string;
  compute_engine_preferences: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferences;
  region_preferences: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesRegionPreferences;
  sole_tenancy_preferences: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesSoleTenancyPreferences;
  vmware_engine_preferences: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesVmwareEnginePreferences;
}
export interface GoogleMigrationCenterPreferenceSetArgs {
  description?: string;
  display_name?: string;
  location: string;
  preference_set_id: string;
  timeouts: GoogleMigrationCenterPreferenceSetArgsTimeouts;
  virtual_machine_preferences: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferences;
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