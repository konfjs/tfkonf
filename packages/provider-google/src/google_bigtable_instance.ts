import { TerraformConfig, TerraformResource } from "tfs";
export interface AutoscalingConfig {
  cpu_target: number;
  max_nodes: number;
  min_nodes: number;
}
export interface Cluster {
  cluster_id: string;
  storage_type?: string;
  autoscaling_config: AutoscalingConfig;
}
export interface Timeouts {
  create?: string;
  read?: string;
  update?: string;
}
export interface GoogleBigtableInstanceArgs {
  deletion_protection?: boolean;
  force_destroy?: boolean;
  instance_type?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  cluster: Cluster;
  timeouts: Timeouts;
}
export class google_bigtable_instance extends TerraformResource {
  readonly display_name?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableInstanceArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_instance");
  }
}