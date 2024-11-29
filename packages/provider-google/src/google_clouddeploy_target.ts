import { TerraformConfig, TerraformResource } from "tfs";
export interface AnthosCluster {
  membership?: string;
}
export interface CustomTarget {
  custom_target_type: string;
}
export interface ExecutionConfigs {
  usages: string[];
  verbose?: boolean;
  worker_pool?: string;
}
export interface Gke {
  cluster?: string;
  internal_ip?: boolean;
  proxy_url?: string;
}
export interface MultiTarget {
  target_ids: string[];
}
export interface Run {
  location: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleClouddeployTargetArgs {
  annotations?: {
    [key: string]: string;
  };
  deploy_parameters?: {
    [key: string]: string;
  };
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  require_approval?: boolean;
  anthos_cluster: AnthosCluster;
  custom_target: CustomTarget;
  execution_configs: ExecutionConfigs;
  gke: Gke;
  multi_target: MultiTarget;
  run: Run;
  timeouts: Timeouts;
}
export class google_clouddeploy_target extends TerraformResource {
  readonly create_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly target_id!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployTargetArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_target");
  }
}