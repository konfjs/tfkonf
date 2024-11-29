import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNotebooksRuntimeArgsAccessConfig {
  access_type?: string;
  runtime_owner?: string;
}
export interface GoogleNotebooksRuntimeArgsSoftwareConfigkernels {
  repository: string;
  tag?: string;
}
export interface GoogleNotebooksRuntimeArgsSoftwareConfig {
  custom_gpu_driver_path?: string;
  enable_health_monitoring?: boolean;
  idle_shutdown?: boolean;
  idle_shutdown_timeout?: number;
  install_gpu_driver?: boolean;
  notebook_upgrade_schedule?: string;
  post_startup_script?: string;
  post_startup_script_behavior?: string;
  kernels: GoogleNotebooksRuntimeArgsSoftwareConfigkernels;
}
export interface GoogleNotebooksRuntimeArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigAcceleratorConfig {
  core_count?: number;
  type?: string;
}
export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigContainerImages {
  repository: string;
  tag?: string;
}
export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigDataDiskInitializeParams {
  description?: string;
  disk_name?: string;
  disk_size_gb?: number;
  disk_type?: string;
}
export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigDataDisk {
  interface?: string;
  mode?: string;
  source?: string;
  type?: string;
  initialize_params: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigDataDiskInitializeParams;
}
export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigEncryptionConfig {
  kms_key?: string;
}
export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfig {
  internal_ip_only?: boolean;
  machine_type: string;
  network?: string;
  nic_type?: string;
  reserved_ip_range?: string;
  subnet?: string;
  accelerator_config: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigAcceleratorConfig;
  container_images: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigContainerImages;
  data_disk: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigDataDisk;
  encryption_config: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigEncryptionConfig;
  shielded_instance_config: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigShieldedInstanceConfig;
}
export interface GoogleNotebooksRuntimeArgsVirtualMachine {
  virtual_machine_config: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfig;
}
export interface GoogleNotebooksRuntimeArgs {
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  access_config: GoogleNotebooksRuntimeArgsAccessConfig;
  software_config: GoogleNotebooksRuntimeArgsSoftwareConfig;
  timeouts: GoogleNotebooksRuntimeArgstimeouts;
  virtual_machine: GoogleNotebooksRuntimeArgsVirtualMachine;
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