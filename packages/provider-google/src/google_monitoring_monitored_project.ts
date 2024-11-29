import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleMonitoringMonitoredProjectArgs {
  metrics_scope: string;
  name: string;
  timeouts: Timeouts;
}
export class google_monitoring_monitored_project extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringMonitoredProjectArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_monitored_project");
  }
}