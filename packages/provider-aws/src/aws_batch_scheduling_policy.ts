import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsBatchSchedulingPolicyArgsFairSharePolicyShareDistribution {
  share_identifier: string;
  weight_factor?: number;
}
export interface AwsBatchSchedulingPolicyArgsFairSharePolicy {
  compute_reservation?: number;
  share_decay_seconds?: number;
  share_distribution: AwsBatchSchedulingPolicyArgsFairSharePolicyShareDistribution;
}
export interface AwsBatchSchedulingPolicyArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  fair_share_policy: AwsBatchSchedulingPolicyArgsFairSharePolicy;
}
export class aws_batch_scheduling_policy extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBatchSchedulingPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_batch_scheduling_policy");
  }
}