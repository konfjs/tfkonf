import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleMonitoringCustomServiceArgsTelemetry {
  resource_name?: string;
}
export interface GoogleMonitoringCustomServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMonitoringCustomServiceArgs {
  display_name?: string;
  user_labels?: {
    [key: string]: string;
  };
  telemetry: GoogleMonitoringCustomServiceArgsTelemetry;
  timeouts: GoogleMonitoringCustomServiceArgsTimeouts;
}
export class google_monitoring_custom_service extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly service_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringCustomServiceArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_custom_service");
  }
}