import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeHttpHealthCheckArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeHttpHealthCheckArgs {
  check_interval_sec?: number;
  description?: string;
  healthy_threshold?: number;
  host?: string;
  name: string;
  port?: number;
  request_path?: string;
  timeout_sec?: number;
  unhealthy_threshold?: number;
  timeouts?: GoogleComputeHttpHealthCheckArgsTimeouts;
}

export class google_compute_http_health_check extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeHttpHealthCheckArgs) {
    super(config, "resource", args, resourceName, "google_compute_http_health_check");
  }
}
