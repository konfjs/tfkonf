import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleTpuNodeArgsSchedulingConfig {
  preemptible: boolean;
}
export interface GoogleTpuNodeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleTpuNodeArgs {
  accelerator_type: string;
  description?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  tensorflow_version: string;
  use_service_networking?: boolean;
  scheduling_config: GoogleTpuNodeArgsSchedulingConfig;
  timeouts: GoogleTpuNodeArgsTimeouts;
}
export class google_tpu_node extends TerraformResource {
  readonly cidr_block?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly network?: string;
  readonly network_endpoints!: any[];
  readonly project?: string;
  readonly service_account!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTpuNodeArgs) {
    super(config, "resource", args, resourceName, "google_tpu_node");
  }
}