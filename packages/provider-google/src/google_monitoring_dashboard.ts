import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleMonitoringDashboardArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMonitoringDashboardArgs {
  dashboard_json: string;
  timeouts: GoogleMonitoringDashboardArgstimeouts;
}
export class google_monitoring_dashboard extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringDashboardArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_dashboard");
  }
}