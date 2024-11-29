import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleMonitoringGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMonitoringGroupArgs {
  display_name: string;
  filter: string;
  is_cluster?: boolean;
  parent_name?: string;
  timeouts: GoogleMonitoringGroupArgsTimeouts;
}
export class google_monitoring_group extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringGroupArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_group");
  }
}