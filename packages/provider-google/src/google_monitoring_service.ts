import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleMonitoringServiceArgsBasicService {
  service_labels?: {
    [key: string]: string;
  };
  service_type?: string;
}
export interface GoogleMonitoringServiceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMonitoringServiceArgs {
  display_name?: string;
  service_id: string;
  user_labels?: {
    [key: string]: string;
  };
  basic_service: GoogleMonitoringServiceArgsBasicService;
  timeouts: GoogleMonitoringServiceArgstimeouts;
}
export class google_monitoring_service extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly telemetry!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringServiceArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_service");
  }
}