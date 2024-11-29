import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleVertexAiDeploymentResourcePoolArgsDedicatedResourcesAutoscalingMetricSpecs {
  metric_name: string;
  target?: number;
}
export interface GoogleVertexAiDeploymentResourcePoolArgsDedicatedResourcesMachineSpec {
  accelerator_count?: number;
  accelerator_type?: string;
  machine_type?: string;
}
export interface GoogleVertexAiDeploymentResourcePoolArgsDedicatedResources {
  max_replica_count?: number;
  min_replica_count: number;
  autoscaling_metric_specs: GoogleVertexAiDeploymentResourcePoolArgsDedicatedResourcesAutoscalingMetricSpecs;
  machine_spec: GoogleVertexAiDeploymentResourcePoolArgsDedicatedResourcesMachineSpec;
}
export interface GoogleVertexAiDeploymentResourcePoolArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleVertexAiDeploymentResourcePoolArgs {
  name: string;
  region?: string;
  dedicated_resources: GoogleVertexAiDeploymentResourcePoolArgsDedicatedResources;
  timeouts: GoogleVertexAiDeploymentResourcePoolArgsTimeouts;
}
export class google_vertex_ai_deployment_resource_pool extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiDeploymentResourcePoolArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_deployment_resource_pool");
  }
}