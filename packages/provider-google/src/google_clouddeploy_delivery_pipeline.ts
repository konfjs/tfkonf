import { TerraformConfig, TerraformResource } from "tfs";
export interface DeployParameters {
  match_target_labels?: {
    [key: string]: string;
  };
  values: {
    [key: string]: string;
  };
}
export interface Postdeploy {
  actions?: string[];
}
export interface Predeploy {
  actions?: string[];
}
export interface CanaryDeployment {
  percentages: number[];
  verify?: boolean;
  postdeploy: Postdeploy;
  predeploy: Predeploy;
}
export interface Postdeploy {
  actions?: string[];
}
export interface Predeploy {
  actions?: string[];
}
export interface PhaseConfigs {
  percentage: number;
  phase_id: string;
  profiles?: string[];
  verify?: boolean;
  postdeploy: Postdeploy;
  predeploy: Predeploy;
}
export interface CustomCanaryDeployment {
  phase_configs: PhaseConfigs;
}
export interface CloudRun {
  automatic_traffic_control?: boolean;
  canary_revision_tags?: string[];
  prior_revision_tags?: string[];
  stable_revision_tags?: string[];
}
export interface GatewayServiceMesh {
  deployment: string;
  http_route: string;
  pod_selector_label?: string;
  route_update_wait_time?: string;
  service: string;
  stable_cutback_duration?: string;
}
export interface ServiceNetworking {
  deployment: string;
  disable_pod_overprovisioning?: boolean;
  pod_selector_label?: string;
  service: string;
}
export interface Kubernetes {
  gateway_service_mesh: GatewayServiceMesh;
  service_networking: ServiceNetworking;
}
export interface RuntimeConfig {
  cloud_run: CloudRun;
  kubernetes: Kubernetes;
}
export interface Canary {
  canary_deployment: CanaryDeployment;
  custom_canary_deployment: CustomCanaryDeployment;
  runtime_config: RuntimeConfig;
}
export interface Postdeploy {
  actions?: string[];
}
export interface Predeploy {
  actions?: string[];
}
export interface Standard {
  verify?: boolean;
  postdeploy: Postdeploy;
  predeploy: Predeploy;
}
export interface Strategy {
  canary: Canary;
  standard: Standard;
}
export interface Stages {
  profiles?: string[];
  target_id?: string;
  deploy_parameters: DeployParameters;
  strategy: Strategy;
}
export interface SerialPipeline {
  stages: Stages;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleClouddeployDeliveryPipelineArgs {
  annotations?: {
    [key: string]: string;
  };
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  suspended?: boolean;
  serial_pipeline: SerialPipeline;
  timeouts: Timeouts;
}
export class google_clouddeploy_delivery_pipeline extends TerraformResource {
  readonly condition!: any[];
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
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployDeliveryPipelineArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_delivery_pipeline");
  }
}