import { TerraformConfig, TerraformResource } from "tfs";
export interface AutoscalingLimits {
  max_nodes: number;
  min_nodes: number;
}
export interface Overrides {
  autoscaling_limits: AutoscalingLimits;
}
export interface ReplicaSelection {
  location: string;
}
export interface AsymmetricAutoscalingOptions {
  overrides: Overrides;
  replica_selection: ReplicaSelection;
}
export interface AutoscalingLimits {
  max_nodes?: number;
  max_processing_units?: number;
  min_nodes?: number;
  min_processing_units?: number;
}
export interface AutoscalingTargets {
  high_priority_cpu_utilization_percent?: number;
  storage_utilization_percent?: number;
}
export interface AutoscalingConfig {
  asymmetric_autoscaling_options: AsymmetricAutoscalingOptions;
  autoscaling_limits: AutoscalingLimits;
  autoscaling_targets: AutoscalingTargets;
}
export interface Timeouts {
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
  autoscaling_config: AutoscalingConfig;
  timeouts: Timeouts;
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