import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleMonitoringMetricDescriptorArgsLabels {
  description?: string;
  key: string;
  value_type?: string;
}
export interface GoogleMonitoringMetricDescriptorArgsMetadata {
  ingest_delay?: string;
  sample_period?: string;
}
export interface GoogleMonitoringMetricDescriptorArgsTimeouts {
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
  labels: GoogleMonitoringMetricDescriptorArgsLabels;
  metadata: GoogleMonitoringMetricDescriptorArgsMetadata;
  timeouts?: GoogleMonitoringMetricDescriptorArgsTimeouts;
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