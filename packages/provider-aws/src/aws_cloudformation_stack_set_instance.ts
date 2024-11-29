import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudformationStackSetInstanceArgsDeploymentTargets {
  account_filter_type?: string;
  accounts?: string[];
  accounts_url?: string;
  organizational_unit_ids?: string[];
}
export interface AwsCloudformationStackSetInstanceArgsOperationPreferences {
  concurrency_mode?: string;
  failure_tolerance_count?: number;
  failure_tolerance_percentage?: number;
  max_concurrent_count?: number;
  max_concurrent_percentage?: number;
  region_concurrency_type?: string;
  region_order?: string[];
}
export interface AwsCloudformationStackSetInstanceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCloudformationStackSetInstanceArgs {
  call_as?: string;
  parameter_overrides?: {
    [key: string]: string;
  };
  retain_stack?: boolean;
  stack_set_name: string;
  deployment_targets: AwsCloudformationStackSetInstanceArgsDeploymentTargets;
  operation_preferences: AwsCloudformationStackSetInstanceArgsOperationPreferences;
  timeouts: AwsCloudformationStackSetInstanceArgstimeouts;
}
export class aws_cloudformation_stack_set_instance extends TerraformResource {
  readonly account_id?: string;
  readonly id?: string;
  readonly organizational_unit_id!: string;
  readonly region?: string;
  readonly stack_id!: string;
  readonly stack_instance_summaries!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudformationStackSetInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_cloudformation_stack_set_instance");
  }
}