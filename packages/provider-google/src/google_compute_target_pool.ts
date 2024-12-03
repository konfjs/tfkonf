import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeTargetPoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeTargetPoolArgs {
  backup_pool?: string;
  description?: string;
  failover_ratio?: number;
  health_checks?: string[];
  name: string;
  session_affinity?: string;
  timeouts?: GoogleComputeTargetPoolArgsTimeouts;
}
export class google_compute_target_pool extends TerraformResource {
  readonly id?: string;
  readonly instances?: string[];
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeTargetPoolArgs) {
    super(config, "resource", args, resourceName, "google_compute_target_pool");
  }
}