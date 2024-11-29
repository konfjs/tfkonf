import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleNotebooksInstanceArgsAcceleratorConfig {
  core_count: number;
  type: string;
}
export interface GoogleNotebooksInstanceArgsContainerImage {
  repository: string;
  tag?: string;
}
export interface GoogleNotebooksInstanceArgsReservationAffinity {
  consume_reservation_type: string;
  key?: string;
  values?: string[];
}
export interface GoogleNotebooksInstanceArgsShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface GoogleNotebooksInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNotebooksInstanceArgsVmImage {
  image_family?: string;
  image_name?: string;
  project: string;
}
export interface GoogleNotebooksInstanceArgs {
  boot_disk_size_gb?: number;
  boot_disk_type?: string;
  custom_gpu_driver_path?: string;
  data_disk_size_gb?: number;
  data_disk_type?: string;
  desired_state?: string;
  install_gpu_driver?: boolean;
  instance_owners?: string[];
  kms_key?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  machine_type: string;
  metadata?: {
    [key: string]: string;
  };
  name: string;
  nic_type?: string;
  no_proxy_access?: boolean;
  no_public_ip?: boolean;
  no_remove_data_disk?: boolean;
  post_startup_script?: string;
  accelerator_config: GoogleNotebooksInstanceArgsAcceleratorConfig;
  container_image: GoogleNotebooksInstanceArgsContainerImage;
  reservation_affinity: GoogleNotebooksInstanceArgsReservationAffinity;
  shielded_instance_config: GoogleNotebooksInstanceArgsShieldedInstanceConfig;
  timeouts: GoogleNotebooksInstanceArgsTimeouts;
  vm_image: GoogleNotebooksInstanceArgsVmImage;
}
export class google_notebooks_instance extends TerraformResource {
  readonly create_time?: string;
  readonly disk_encryption?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly network?: string;
  readonly project?: string;
  readonly proxy_uri!: string;
  readonly service_account?: string;
  readonly service_account_scopes?: string[];
  readonly state!: string;
  readonly subnet?: string;
  readonly tags?: string[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNotebooksInstanceArgs) {
    super(config, "resource", args, resourceName, "google_notebooks_instance");
  }
}