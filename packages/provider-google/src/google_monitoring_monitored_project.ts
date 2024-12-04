import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMonitoringMonitoredProjectArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleMonitoringMonitoredProjectArgs {
  metrics_scope: string;
  name: string;
  timeouts?: GoogleMonitoringMonitoredProjectArgsTimeouts;
}

export class google_monitoring_monitored_project extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringMonitoredProjectArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_monitored_project");
  }
}
