import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleBigtableInstanceArgsClusterAutoscalingConfig {
  cpu_target: number;
  max_nodes: number;
  min_nodes: number;
}
export interface GoogleBigtableInstanceArgsCluster {
  cluster_id: string;
  storage_type?: string;
  autoscaling_config: GoogleBigtableInstanceArgsClusterAutoscalingConfig;
}
export interface GoogleBigtableInstanceArgsTimeouts {
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
  cluster: GoogleBigtableInstanceArgsCluster;
  timeouts?: GoogleBigtableInstanceArgsTimeouts;
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