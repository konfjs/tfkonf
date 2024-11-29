import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRedshiftScheduledActionArgsTargetActionPauseCluster {
  cluster_identifier: string;
}
export interface AwsRedshiftScheduledActionArgsTargetActionResizeCluster {
  classic?: boolean;
  cluster_identifier: string;
  cluster_type?: string;
  node_type?: string;
  number_of_nodes?: number;
}
export interface AwsRedshiftScheduledActionArgsTargetActionResumeCluster {
  cluster_identifier: string;
}
export interface AwsRedshiftScheduledActionArgsTargetAction {
  pause_cluster: AwsRedshiftScheduledActionArgsTargetActionPauseCluster;
  resize_cluster: AwsRedshiftScheduledActionArgsTargetActionResizeCluster;
  resume_cluster: AwsRedshiftScheduledActionArgsTargetActionResumeCluster;
}
export interface AwsRedshiftScheduledActionArgs {
  description?: string;
  enable?: boolean;
  end_time?: string;
  iam_role: string;
  name: string;
  schedule: string;
  start_time?: string;
  target_action: AwsRedshiftScheduledActionArgsTargetAction;
}
export class aws_redshift_scheduled_action extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftScheduledActionArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_scheduled_action");
  }
}