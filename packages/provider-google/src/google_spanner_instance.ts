import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsoverridesAutoscalingLimits {
  max_nodes: number;
  min_nodes: number;
}
export interface GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsoverrides {
  autoscaling_limits: GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsoverridesAutoscalingLimits;
}
export interface GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection {
  location: string;
}
export interface GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptions {
  overrides: GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsoverrides;
  replica_selection: GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptionsReplicaSelection;
}
export interface GoogleSpannerInstanceArgsAutoscalingConfigAutoscalingLimits {
  max_nodes?: number;
  max_processing_units?: number;
  min_nodes?: number;
  min_processing_units?: number;
}
export interface GoogleSpannerInstanceArgsAutoscalingConfigAutoscalingTargets {
  high_priority_cpu_utilization_percent?: number;
  storage_utilization_percent?: number;
}
export interface GoogleSpannerInstanceArgsAutoscalingConfig {
  asymmetric_autoscaling_options: GoogleSpannerInstanceArgsAutoscalingConfigAsymmetricAutoscalingOptions;
  autoscaling_limits: GoogleSpannerInstanceArgsAutoscalingConfigAutoscalingLimits;
  autoscaling_targets: GoogleSpannerInstanceArgsAutoscalingConfigAutoscalingTargets;
}
export interface GoogleSpannerInstanceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSpannerInstanceArgs {
  config: string;
  display_name: string;
  force_destroy?: boolean;
  labels?: {
    [key: string]: string;
  };
  autoscaling_config: GoogleSpannerInstanceArgsAutoscalingConfig;
  timeouts: GoogleSpannerInstanceArgstimeouts;
}
export class google_spanner_instance extends TerraformResource {
  readonly default_backup_schedule_type?: string;
  readonly edition?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name?: string;
  readonly num_nodes?: number;
  readonly processing_units?: number;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerInstanceArgs) {
    super(config, "resource", args, resourceName, "google_spanner_instance");
  }
}