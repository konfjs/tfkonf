import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleCloudbuildWorkerPoolArgsNetworkConfig {
  peered_network: string;
  peered_network_ip_range?: string;
}
export interface GoogleCloudbuildWorkerPoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudbuildWorkerPoolArgsWorkerConfig {
  disk_size_gb?: number;
  machine_type?: string;
}
export interface GoogleCloudbuildWorkerPoolArgs {
  annotations?: {
    [key: string]: string;
  };
  display_name?: string;
  location: string;
  name: string;
  network_config: GoogleCloudbuildWorkerPoolArgsNetworkConfig;
  timeouts?: GoogleCloudbuildWorkerPoolArgsTimeouts;
  worker_config: GoogleCloudbuildWorkerPoolArgsWorkerConfig;
}
export class google_cloudbuild_worker_pool extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudbuildWorkerPoolArgs) {
    super(config, "resource", args, resourceName, "google_cloudbuild_worker_pool");
  }
}