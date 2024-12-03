import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleAppEngineServiceSplitTrafficArgsSplit {
  allocations: {
    [key: string]: string;
  };
  shard_by?: string;
}
export interface GoogleAppEngineServiceSplitTrafficArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAppEngineServiceSplitTrafficArgs {
  migrate_traffic?: boolean;
  service: string;
  split: GoogleAppEngineServiceSplitTrafficArgsSplit;
  timeouts?: GoogleAppEngineServiceSplitTrafficArgsTimeouts;
}
export class google_app_engine_service_split_traffic extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineServiceSplitTrafficArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_service_split_traffic");
  }
}