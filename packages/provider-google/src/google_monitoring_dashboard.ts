import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMonitoringDashboardArgs {
  dashboard_json: string;
  timeouts: Timeouts;
}
export class google_monitoring_dashboard extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringDashboardArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_dashboard");
  }
}