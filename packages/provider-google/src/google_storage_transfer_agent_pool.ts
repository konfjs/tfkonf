import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageTransferAgentPoolArgsBandwidthLimit {
  limit_mbps: string;
}

export interface GoogleStorageTransferAgentPoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleStorageTransferAgentPoolArgs {
  display_name?: string;
  name: string;
  bandwidth_limit: GoogleStorageTransferAgentPoolArgsBandwidthLimit;
  timeouts?: GoogleStorageTransferAgentPoolArgsTimeouts;
}

export class google_storage_transfer_agent_pool extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageTransferAgentPoolArgs) {
    super(config, "resource", args, resourceName, "google_storage_transfer_agent_pool");
  }
}
