import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesDeployParameters {
  match_target_labels?: {
    [key: string]: string;
  };
  values: {
    [key: string]: string;
  };
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCanaryDeploymentpostdeploy {
  actions?: string[];
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCanaryDeploymentpredeploy {
  actions?: string[];
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCanaryDeployment {
  percentages: number[];
  verify?: boolean;
  postdeploy: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCanaryDeploymentpostdeploy;
  predeploy: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCanaryDeploymentpredeploy;
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCustomCanaryDeploymentPhaseConfigspostdeploy {
  actions?: string[];
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCustomCanaryDeploymentPhaseConfigspredeploy {
  actions?: string[];
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCustomCanaryDeploymentPhaseConfigs {
  percentage: number;
  phase_id: string;
  profiles?: string[];
  verify?: boolean;
  postdeploy: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCustomCanaryDeploymentPhaseConfigspostdeploy;
  predeploy: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCustomCanaryDeploymentPhaseConfigspredeploy;
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCustomCanaryDeployment {
  phase_configs: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCustomCanaryDeploymentPhaseConfigs;
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryRuntimeConfigCloudRun {
  automatic_traffic_control?: boolean;
  canary_revision_tags?: string[];
  prior_revision_tags?: string[];
  stable_revision_tags?: string[];
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryRuntimeConfigkubernetesGatewayServiceMesh {
  deployment: string;
  http_route: string;
  pod_selector_label?: string;
  route_update_wait_time?: string;
  service: string;
  stable_cutback_duration?: string;
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryRuntimeConfigkubernetesServiceNetworking {
  deployment: string;
  disable_pod_overprovisioning?: boolean;
  pod_selector_label?: string;
  service: string;
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryRuntimeConfigkubernetes {
  gateway_service_mesh: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryRuntimeConfigkubernetesGatewayServiceMesh;
  service_networking: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryRuntimeConfigkubernetesServiceNetworking;
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryRuntimeConfig {
  cloud_run: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryRuntimeConfigCloudRun;
  kubernetes: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryRuntimeConfigkubernetes;
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanary {
  canary_deployment: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCanaryDeployment;
  custom_canary_deployment: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryCustomCanaryDeployment;
  runtime_config: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanaryRuntimeConfig;
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategystandardpostdeploy {
  actions?: string[];
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategystandardpredeploy {
  actions?: string[];
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategystandard {
  verify?: boolean;
  postdeploy: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategystandardpostdeploy;
  predeploy: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategystandardpredeploy;
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategy {
  canary: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategycanary;
  standard: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategystandard;
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipelinestages {
  profiles?: string[];
  target_id?: string;
  deploy_parameters: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesDeployParameters;
  strategy: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestagesstrategy;
}
export interface GoogleClouddeployDeliveryPipelineArgsSerialPipeline {
  stages: GoogleClouddeployDeliveryPipelineArgsSerialPipelinestages;
}
export interface GoogleClouddeployDeliveryPipelineArgstimeouts {
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
  serial_pipeline: GoogleClouddeployDeliveryPipelineArgsSerialPipeline;
  timeouts: GoogleClouddeployDeliveryPipelineArgstimeouts;
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