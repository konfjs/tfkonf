import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsBatchJobQueueArgsComputeEnvironmentOrder {
  compute_environment: string;
  order: number;
}
export interface AwsBatchJobQueueArgsJobStateTimeLimitAction {
  action: string;
  max_time_seconds: number;
  reason: string;
  state: string;
}
export interface AwsBatchJobQueueArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsBatchJobQueueArgs {
  compute_environments?: string[];
  name: string;
  priority: number;
  scheduling_policy_arn?: string;
  state: string;
  tags?: {
    [key: string]: string;
  };
  compute_environment_order: AwsBatchJobQueueArgsComputeEnvironmentOrder;
  job_state_time_limit_action: AwsBatchJobQueueArgsJobStateTimeLimitAction;
  timeouts: AwsBatchJobQueueArgsTimeouts;
}
export class aws_batch_job_queue extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBatchJobQueueArgs) {
    super(config, "resource", args, resourceName, "aws_batch_job_queue");
  }
}