import { TerraformConfig, TerraformResource } from "tfs";
export interface AutoscalingMetricSpecs {
  metric_name: string;
  target?: number;
}
export interface MachineSpec {
  accelerator_count?: number;
  accelerator_type?: string;
  machine_type?: string;
}
export interface DedicatedResources {
  max_replica_count?: number;
  min_replica_count: number;
  autoscaling_metric_specs: AutoscalingMetricSpecs;
  machine_spec: MachineSpec;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleVertexAiDeploymentResourcePoolArgs {
  name: string;
  region?: string;
  dedicated_resources: DedicatedResources;
  timeouts: Timeouts;
}
export class google_vertex_ai_deployment_resource_pool extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiDeploymentResourcePoolArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_deployment_resource_pool");
  }
}