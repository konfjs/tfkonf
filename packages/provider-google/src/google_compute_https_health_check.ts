import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeHttpsHealthCheckArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeHttpsHealthCheckArgs {
  check_interval_sec?: number;
  description?: string;
  healthy_threshold?: number;
  host?: string;
  name: string;
  port?: number;
  request_path?: string;
  timeout_sec?: number;
  unhealthy_threshold?: number;
  timeouts: GoogleComputeHttpsHealthCheckArgsTimeouts;
}
export class google_compute_https_health_check extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeHttpsHealthCheckArgs) {
    super(config, "resource", args, resourceName, "google_compute_https_health_check");
  }
}