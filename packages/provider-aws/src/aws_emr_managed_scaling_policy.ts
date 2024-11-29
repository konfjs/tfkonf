import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEmrManagedScalingPolicyArgsComputeLimits {
  maximum_capacity_units: number;
  maximum_core_capacity_units?: number;
  maximum_ondemand_capacity_units?: number;
  minimum_capacity_units: number;
  unit_type: string;
}
export interface AwsEmrManagedScalingPolicyArgs {
  cluster_id: string;
  compute_limits: AwsEmrManagedScalingPolicyArgsComputeLimits;
}
export class aws_emr_managed_scaling_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrManagedScalingPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_emr_managed_scaling_policy");
  }
}