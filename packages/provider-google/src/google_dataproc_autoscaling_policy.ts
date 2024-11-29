import { TerraformConfig, TerraformResource } from "tfs";
export interface YarnConfig {
  graceful_decommission_timeout: string;
  scale_down_factor: number;
  scale_down_min_worker_fraction?: number;
  scale_up_factor: number;
  scale_up_min_worker_fraction?: number;
}
export interface BasicAlgorithm {
  cooldown_period?: string;
  yarn_config: YarnConfig;
}
export interface SecondaryWorkerConfig {
  max_instances?: number;
  min_instances?: number;
  weight?: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface WorkerConfig {
  max_instances: number;
  min_instances?: number;
  weight?: number;
}
export interface GoogleDataprocAutoscalingPolicyArgs {
  location?: string;
  policy_id: string;
  basic_algorithm: BasicAlgorithm;
  secondary_worker_config: SecondaryWorkerConfig;
  timeouts: Timeouts;
  worker_config: WorkerConfig;
}
export class google_dataproc_autoscaling_policy extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocAutoscalingPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_autoscaling_policy");
  }
}