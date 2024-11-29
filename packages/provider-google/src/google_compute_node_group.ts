import { TerraformConfig, TerraformResource } from "tfs";
export interface AutoscalingPolicy {}
export interface MaintenanceWindow {
  start_time: string;
}
export interface ProjectMap {
  id: string;
  project_id: string;
}
export interface ShareSettings {
  share_type: string;
  project_map: ProjectMap;
}
export interface Timeouts {
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
  autoscaling_policy: AutoscalingPolicy;
  maintenance_window: MaintenanceWindow;
  share_settings: ShareSettings;
  timeouts: Timeouts;
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