import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeResizeRequestArgsRequestedRunDuration {
  nanos?: number;
  seconds: string;
}
export interface GoogleComputeResizeRequestArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeResizeRequestArgs {
  description?: string;
  instance_group_manager: string;
  name: string;
  resize_by: number;
  zone: string;
  requested_run_duration: GoogleComputeResizeRequestArgsRequestedRunDuration;
  timeouts?: GoogleComputeResizeRequestArgsTimeouts;
}
export class google_compute_resize_request extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly status!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeResizeRequestArgs) {
    super(config, "resource", args, resourceName, "google_compute_resize_request");
  }
}