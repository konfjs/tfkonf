import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyCpuUtilization {
  predictive_method?: string;
  target: number;
}
export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyLoadBalancingUtilization {
  target: number;
}
export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyMetric {
  filter?: string;
  name: string;
  single_instance_assignment?: number;
  target?: number;
  type?: string;
}
export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScaleInControlMaxScaledInReplicas {
  fixed?: number;
  percent?: number;
}
export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScaleInControl {
  time_window_sec?: number;
  max_scaled_in_replicas: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScaleInControlMaxScaledInReplicas;
}
export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScalingSchedules {
  description?: string;
  disabled?: boolean;
  duration_sec: number;
  min_required_replicas: number;
  name: string;
  schedule: string;
  time_zone?: string;
}
export interface GoogleComputeRegionAutoscalerArgsAutoscalingPolicy {
  cooldown_period?: number;
  max_replicas: number;
  min_replicas: number;
  mode?: string;
  cpu_utilization: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyCpuUtilization;
  load_balancing_utilization: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyLoadBalancingUtilization;
  metric: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyMetric;
  scale_in_control: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScaleInControl;
  scaling_schedules: GoogleComputeRegionAutoscalerArgsAutoscalingPolicyScalingSchedules;
}
export interface GoogleComputeRegionAutoscalerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeRegionAutoscalerArgs {
  description?: string;
  name: string;
  target: string;
  autoscaling_policy: GoogleComputeRegionAutoscalerArgsAutoscalingPolicy;
  timeouts?: GoogleComputeRegionAutoscalerArgsTimeouts;
}
export class google_compute_region_autoscaler extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionAutoscalerArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_autoscaler");
  }
}