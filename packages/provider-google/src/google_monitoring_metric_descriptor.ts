import { TerraformConfig, TerraformResource } from "tfs";
export interface Labels {
  description?: string;
  key: string;
  value_type?: string;
}
export interface Metadata {
  ingest_delay?: string;
  sample_period?: string;
}
export interface Timeouts {
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
  labels: Labels;
  metadata: Metadata;
  timeouts: Timeouts;
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