import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleClouddeployTargetArgsAnthosCluster {
  membership?: string;
}
export interface GoogleClouddeployTargetArgsCustomTarget {
  custom_target_type: string;
}
export interface GoogleClouddeployTargetArgsExecutionConfigs {
  usages: string[];
  verbose?: boolean;
  worker_pool?: string;
}
export interface GoogleClouddeployTargetArgsgke {
  cluster?: string;
  internal_ip?: boolean;
  proxy_url?: string;
}
export interface GoogleClouddeployTargetArgsMultiTarget {
  target_ids: string[];
}
export interface GoogleClouddeployTargetArgsrun {
  location: string;
}
export interface GoogleClouddeployTargetArgstimeouts {
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
  anthos_cluster: GoogleClouddeployTargetArgsAnthosCluster;
  custom_target: GoogleClouddeployTargetArgsCustomTarget;
  execution_configs: GoogleClouddeployTargetArgsExecutionConfigs;
  gke: GoogleClouddeployTargetArgsgke;
  multi_target: GoogleClouddeployTargetArgsMultiTarget;
  run: GoogleClouddeployTargetArgsrun;
  timeouts: GoogleClouddeployTargetArgstimeouts;
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