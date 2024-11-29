import { TerraformConfig, TerraformResource } from "tfs";
export interface PauseCluster {
  cluster_identifier: string;
}
export interface ResizeCluster {
  classic?: boolean;
  cluster_identifier: string;
  cluster_type?: string;
  node_type?: string;
  number_of_nodes?: number;
}
export interface ResumeCluster {
  cluster_identifier: string;
}
export interface TargetAction {
  pause_cluster: PauseCluster;
  resize_cluster: ResizeCluster;
  resume_cluster: ResumeCluster;
}
export interface AwsRedshiftScheduledActionArgs {
  description?: string;
  enable?: boolean;
  end_time?: string;
  iam_role: string;
  name: string;
  schedule: string;
  start_time?: string;
  target_action: TargetAction;
}
export class aws_redshift_scheduled_action extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftScheduledActionArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_scheduled_action");
  }
}