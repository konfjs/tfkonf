import { TerraformConfig, TerraformResource } from "tfs";
export interface AccessConfig {
  access_type?: string;
  runtime_owner?: string;
}
export interface Kernels {
  repository: string;
  tag?: string;
}
export interface SoftwareConfig {
  custom_gpu_driver_path?: string;
  enable_health_monitoring?: boolean;
  idle_shutdown?: boolean;
  idle_shutdown_timeout?: number;
  install_gpu_driver?: boolean;
  notebook_upgrade_schedule?: string;
  post_startup_script?: string;
  post_startup_script_behavior?: string;
  kernels: Kernels;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AcceleratorConfig {
  core_count?: number;
  type?: string;
}
export interface ContainerImages {
  repository: string;
  tag?: string;
}
export interface InitializeParams {
  description?: string;
  disk_name?: string;
  disk_size_gb?: number;
  disk_type?: string;
}
export interface DataDisk {
  interface?: string;
  mode?: string;
  source?: string;
  type?: string;
  initialize_params: InitializeParams;
}
export interface EncryptionConfig {
  kms_key?: string;
}
export interface ShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface VirtualMachineConfig {
  internal_ip_only?: boolean;
  machine_type: string;
  network?: string;
  nic_type?: string;
  reserved_ip_range?: string;
  subnet?: string;
  accelerator_config: AcceleratorConfig;
  container_images: ContainerImages;
  data_disk: DataDisk;
  encryption_config: EncryptionConfig;
  shielded_instance_config: ShieldedInstanceConfig;
}
export interface VirtualMachine {
  virtual_machine_config: VirtualMachineConfig;
}
export interface GoogleNotebooksRuntimeArgs {
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  access_config: AccessConfig;
  software_config: SoftwareConfig;
  timeouts: Timeouts;
  virtual_machine: VirtualMachine;
}
export class google_notebooks_runtime extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly health_state!: string;
  readonly id?: string;
  readonly metrics!: any[];
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksRuntimeArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_runtime");
  }
}