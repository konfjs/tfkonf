import { TerraformConfig, TerraformResource } from "tfs";
export interface BandwidthLimit {
  limit_mbps: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleStorageTransferAgentPoolArgs {
  display_name?: string;
  name: string;
  bandwidth_limit: BandwidthLimit;
  timeouts: Timeouts;
}
export class google_storage_transfer_agent_pool extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageTransferAgentPoolArgs) {
    super(config, "resource", args, resourceName, "google_storage_transfer_agent_pool");
  }
}