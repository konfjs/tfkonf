import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigtableInstanceArgsclusterAutoscalingConfig {
  cpu_target: number;
  max_nodes: number;
  min_nodes: number;
}
export interface GoogleBigtableInstanceArgscluster {
  cluster_id: string;
  storage_type?: string;
  autoscaling_config: GoogleBigtableInstanceArgsclusterAutoscalingConfig;
}
export interface GoogleBigtableInstanceArgstimeouts {
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
  cluster: GoogleBigtableInstanceArgscluster;
  timeouts: GoogleBigtableInstanceArgstimeouts;
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