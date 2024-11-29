import { TerraformConfig, TerraformResource } from "tfs";
export interface AcceleratorConfigs {
  core_count?: string;
  type?: string;
}
export interface BootDisk {
  kms_key?: string;
}
export interface ContainerImage {
  repository: string;
  tag?: string;
}
export interface DataDisks {
  disk_type?: string;
  kms_key?: string;
}
export interface AccessConfigs {
  external_ip: string;
}
export interface NetworkInterfaces {
  nic_type?: string;
  access_configs: AccessConfigs;
}
export interface ServiceAccounts {}
export interface ShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface VmImage {
  family?: string;
  name?: string;
  project?: string;
}
export interface GceSetup {
  enable_ip_forwarding?: boolean;
  accelerator_configs: AcceleratorConfigs;
  boot_disk: BootDisk;
  container_image: ContainerImage;
  data_disks: DataDisks;
  network_interfaces: NetworkInterfaces;
  service_accounts: ServiceAccounts;
  shielded_instance_config: ShieldedInstanceConfig;
  vm_image: VmImage;
}
export interface Timeouts {
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
  gce_setup: GceSetup;
  timeouts: Timeouts;
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