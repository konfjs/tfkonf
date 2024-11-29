import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeNodeGroupArgsAutoscalingPolicy {}
export interface GoogleComputeNodeGroupArgsMaintenanceWindow {
  start_time: string;
}
export interface GoogleComputeNodeGroupArgsShareSettingsProjectMap {
  id: string;
  project_id: string;
}
export interface GoogleComputeNodeGroupArgsShareSettings {
  share_type: string;
  project_map: GoogleComputeNodeGroupArgsShareSettingsProjectMap;
}
export interface GoogleComputeNodeGroupArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeNodeGroupArgs {
  description?: string;
  initial_size?: number;
  maintenance_policy?: string;
  name?: string;
  node_template: string;
  autoscaling_policy: GoogleComputeNodeGroupArgsAutoscalingPolicy;
  maintenance_window: GoogleComputeNodeGroupArgsMaintenanceWindow;
  share_settings: GoogleComputeNodeGroupArgsShareSettings;
  timeouts: GoogleComputeNodeGroupArgstimeouts;
}
export class google_compute_node_group extends TerraformResource {
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly size!: number;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeNodeGroupArgs) {
    super(config, "resource", args, resourceName, "google_compute_node_group");
  }
}