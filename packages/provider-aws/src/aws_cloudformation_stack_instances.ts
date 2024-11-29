import { TerraformConfig, TerraformResource } from "tfs";
export interface DeploymentTargets {
  account_filter_type?: string;
  accounts?: string[];
  accounts_url?: string;
  organizational_unit_ids?: string[];
}
export interface OperationPreferences {
  concurrency_mode?: string;
  failure_tolerance_count?: number;
  failure_tolerance_percentage?: number;
  max_concurrent_count?: number;
  max_concurrent_percentage?: number;
  region_concurrency_type?: string;
  region_order?: string[];
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCloudformationStackInstancesArgs {
  call_as?: string;
  parameter_overrides?: {
    [key: string]: string;
  };
  retain_stacks?: boolean;
  stack_set_name: string;
  deployment_targets: DeploymentTargets;
  operation_preferences: OperationPreferences;
  timeouts: Timeouts;
}
export class aws_cloudformation_stack_instances extends TerraformResource {
  readonly accounts?: string[];
  readonly id?: string;
  readonly regions?: string[];
  readonly stack_instance_summaries!: any[];
  readonly stack_set_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudformationStackInstancesArgs) {
    super(config, "resource", args, resourceName, "aws_cloudformation_stack_instances");
  }
}