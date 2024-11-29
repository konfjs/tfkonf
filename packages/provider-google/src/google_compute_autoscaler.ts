import { TerraformConfig, TerraformResource } from "tfs";
export interface CpuUtilization {
  predictive_method?: string;
  target: number;
}
export interface LoadBalancingUtilization {
  target: number;
}
export interface Metric {
  name: string;
  target?: number;
  type?: string;
}
export interface MaxScaledInReplicas {
  fixed?: number;
  percent?: number;
}
export interface ScaleInControl {
  time_window_sec?: number;
  max_scaled_in_replicas: MaxScaledInReplicas;
}
export interface ScalingSchedules {
  description?: string;
  disabled?: boolean;
  duration_sec: number;
  min_required_replicas: number;
  name: string;
  schedule: string;
  time_zone?: string;
}
export interface AutoscalingPolicy {
  cooldown_period?: number;
  max_replicas: number;
  min_replicas: number;
  mode?: string;
  cpu_utilization: CpuUtilization;
  load_balancing_utilization: LoadBalancingUtilization;
  metric: Metric;
  scale_in_control: ScaleInControl;
  scaling_schedules: ScalingSchedules;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeAutoscalerArgs {
  description?: string;
  name: string;
  target: string;
  autoscaling_policy: AutoscalingPolicy;
  timeouts: Timeouts;
}
export class google_compute_autoscaler extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeAutoscalerArgs) {
    super(config, "resource", args, resourceName, "google_compute_autoscaler");
  }
}