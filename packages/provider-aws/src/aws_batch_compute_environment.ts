import { TerraformConfig, TerraformResource } from "tfs";
export interface Ec2Configuration {
  image_type?: string;
}
export interface LaunchTemplate {
  launch_template_id?: string;
  launch_template_name?: string;
}
export interface ComputeResources {
  allocation_strategy?: string;
  bid_percentage?: number;
  ec2_key_pair?: string;
  image_id?: string;
  instance_role?: string;
  instance_type?: string[];
  max_vcpus: number;
  min_vcpus?: number;
  placement_group?: string;
  security_group_ids?: string[];
  spot_iam_fleet_role?: string;
  subnets: string[];
  tags?: {
    [key: string]: string;
  };
  type: string;
  ec2_configuration: Ec2Configuration;
  launch_template: LaunchTemplate;
}
export interface EksConfiguration {
  eks_cluster_arn: string;
  kubernetes_namespace: string;
}
export interface UpdatePolicy {
  job_execution_timeout_minutes: number;
  terminate_jobs_on_update: boolean;
}
export interface AwsBatchComputeEnvironmentArgs {
  state?: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  compute_resources: ComputeResources;
  eks_configuration: EksConfiguration;
  update_policy: UpdatePolicy;
}
export class aws_batch_compute_environment extends TerraformResource {
  readonly arn!: string;
  readonly compute_environment_name?: string;
  readonly compute_environment_name_prefix?: string;
  readonly ecs_cluster_arn!: string;
  readonly id?: string;
  readonly service_role?: string;
  readonly status!: string;
  readonly status_reason!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBatchComputeEnvironmentArgs) {
    super(config, "resource", args, resourceName, "aws_batch_compute_environment");
  }
}