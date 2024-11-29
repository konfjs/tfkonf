import { TerraformConfig, TerraformResource } from "tfs";
export interface Split {
  allocations: {
    [key: string]: string;
  };
  shard_by?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAppEngineServiceSplitTrafficArgs {
  migrate_traffic?: boolean;
  service: string;
  split: Split;
  timeouts: Timeouts;
}
export class google_app_engine_service_split_traffic extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineServiceSplitTrafficArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_service_split_traffic");
  }
}