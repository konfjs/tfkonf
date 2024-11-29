import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeAutoscalerArgsAutoscalingPolicyCpuUtilization {
  predictive_method?: string;
  target: number;
}
export interface GoogleComputeAutoscalerArgsAutoscalingPolicyLoadBalancingUtilization {
  target: number;
}
export interface GoogleComputeAutoscalerArgsAutoscalingPolicymetric {
  name: string;
  target?: number;
  type?: string;
}
export interface GoogleComputeAutoscalerArgsAutoscalingPolicyScaleInControlMaxScaledInReplicas {
  fixed?: number;
  percent?: number;
}
export interface GoogleComputeAutoscalerArgsAutoscalingPolicyScaleInControl {
  time_window_sec?: number;
  max_scaled_in_replicas: GoogleComputeAutoscalerArgsAutoscalingPolicyScaleInControlMaxScaledInReplicas;
}
export interface GoogleComputeAutoscalerArgsAutoscalingPolicyScalingSchedules {
  description?: string;
  disabled?: boolean;
  duration_sec: number;
  min_required_replicas: number;
  name: string;
  schedule: string;
  time_zone?: string;
}
export interface GoogleComputeAutoscalerArgsAutoscalingPolicy {
  cooldown_period?: number;
  max_replicas: number;
  min_replicas: number;
  mode?: string;
  cpu_utilization: GoogleComputeAutoscalerArgsAutoscalingPolicyCpuUtilization;
  load_balancing_utilization: GoogleComputeAutoscalerArgsAutoscalingPolicyLoadBalancingUtilization;
  metric: GoogleComputeAutoscalerArgsAutoscalingPolicymetric;
  scale_in_control: GoogleComputeAutoscalerArgsAutoscalingPolicyScaleInControl;
  scaling_schedules: GoogleComputeAutoscalerArgsAutoscalingPolicyScalingSchedules;
}
export interface GoogleComputeAutoscalerArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeAutoscalerArgs {
  description?: string;
  name: string;
  target: string;
  autoscaling_policy: GoogleComputeAutoscalerArgsAutoscalingPolicy;
  timeouts: GoogleComputeAutoscalerArgstimeouts;
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