import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleLoggingLogScopeArgs {
  description?: string;
  name: string;
  resource_names: string[];
  timeouts: Timeouts;
}
export class google_logging_log_scope extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly location?: string;
  readonly parent?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingLogScopeArgs) {
    super(config, "resource", args, resourceName, "google_logging_log_scope");
  }
}