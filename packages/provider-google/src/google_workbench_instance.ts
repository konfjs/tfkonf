import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleWorkbenchInstanceArgsGceSetupAcceleratorConfigs {
  core_count?: string;
  type?: string;
}
export interface GoogleWorkbenchInstanceArgsGceSetupBootDisk {
  kms_key?: string;
}
export interface GoogleWorkbenchInstanceArgsGceSetupContainerImage {
  repository: string;
  tag?: string;
}
export interface GoogleWorkbenchInstanceArgsGceSetupDataDisks {
  disk_type?: string;
  kms_key?: string;
}
export interface GoogleWorkbenchInstanceArgsGceSetupNetworkInterfacesAccessConfigs {
  external_ip: string;
}
export interface GoogleWorkbenchInstanceArgsGceSetupNetworkInterfaces {
  nic_type?: string;
  access_configs: GoogleWorkbenchInstanceArgsGceSetupNetworkInterfacesAccessConfigs;
}
export interface GoogleWorkbenchInstanceArgsGceSetupServiceAccounts {}
export interface GoogleWorkbenchInstanceArgsGceSetupShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface GoogleWorkbenchInstanceArgsGceSetupVmImage {
  family?: string;
  name?: string;
  project?: string;
}
export interface GoogleWorkbenchInstanceArgsGceSetup {
  enable_ip_forwarding?: boolean;
  accelerator_configs: GoogleWorkbenchInstanceArgsGceSetupAcceleratorConfigs;
  boot_disk: GoogleWorkbenchInstanceArgsGceSetupBootDisk;
  container_image: GoogleWorkbenchInstanceArgsGceSetupContainerImage;
  data_disks: GoogleWorkbenchInstanceArgsGceSetupDataDisks;
  network_interfaces: GoogleWorkbenchInstanceArgsGceSetupNetworkInterfaces;
  service_accounts: GoogleWorkbenchInstanceArgsGceSetupServiceAccounts;
  shielded_instance_config: GoogleWorkbenchInstanceArgsGceSetupShieldedInstanceConfig;
  vm_image: GoogleWorkbenchInstanceArgsGceSetupVmImage;
}
export interface GoogleWorkbenchInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleWorkbenchInstanceArgs {
  desired_state?: string;
  disable_proxy_access?: boolean;
  instance_id?: string;
  instance_owners?: string[];
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  gce_setup: GoogleWorkbenchInstanceArgsGceSetup;
  timeouts: GoogleWorkbenchInstanceArgsTimeouts;
}
export class google_workbench_instance extends TerraformResource {
  readonly create_time!: string;
  readonly creator!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly health_info!: any[];
  readonly health_state!: string;
  readonly id?: string;
  readonly project?: string;
  readonly proxy_uri!: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  readonly upgrade_history!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleWorkbenchInstanceArgs) {
    super(config, "resource", args, resourceName, "google_workbench_instance");
  }
}