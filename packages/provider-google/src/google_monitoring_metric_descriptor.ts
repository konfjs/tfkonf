import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleMonitoringMetricDescriptorArgslabels {
  description?: string;
  key: string;
  value_type?: string;
}
export interface GoogleMonitoringMetricDescriptorArgsmetadata {
  ingest_delay?: string;
  sample_period?: string;
}
export interface GoogleMonitoringMetricDescriptorArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMonitoringMetricDescriptorArgs {
  description: string;
  display_name: string;
  launch_stage?: string;
  metric_kind: string;
  type: string;
  unit?: string;
  value_type: string;
  labels: GoogleMonitoringMetricDescriptorArgslabels;
  metadata: GoogleMonitoringMetricDescriptorArgsmetadata;
  timeouts: GoogleMonitoringMetricDescriptorArgstimeouts;
}
export class google_monitoring_metric_descriptor extends TerraformResource {
  readonly id?: string;
  readonly monitored_resource_types!: string[];
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringMetricDescriptorArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_metric_descriptor");
  }
}