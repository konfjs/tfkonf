import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudformationStackSetArgsAutoDeployment {
  enabled?: boolean;
  retain_stacks_on_account_removal?: boolean;
}
export interface AwsCloudformationStackSetArgsManagedExecution {
  active?: boolean;
}
export interface AwsCloudformationStackSetArgsOperationPreferences {
  failure_tolerance_count?: number;
  failure_tolerance_percentage?: number;
  max_concurrent_count?: number;
  max_concurrent_percentage?: number;
  region_concurrency_type?: string;
  region_order?: string[];
}
export interface AwsCloudformationStackSetArgsTimeouts {
  update?: string;
}
export interface AwsCloudformationStackSetArgs {
  administration_role_arn?: string;
  call_as?: string;
  capabilities?: string[];
  description?: string;
  name: string;
  parameters?: {
    [key: string]: string;
  };
  permission_model?: string;
  tags?: {
    [key: string]: string;
  };
  template_url?: string;
  auto_deployment: AwsCloudformationStackSetArgsAutoDeployment;
  managed_execution: AwsCloudformationStackSetArgsManagedExecution;
  operation_preferences: AwsCloudformationStackSetArgsOperationPreferences;
  timeouts: AwsCloudformationStackSetArgsTimeouts;
}
export class aws_cloudformation_stack_set extends TerraformResource {
  readonly arn!: string;
  readonly execution_role_name?: string;
  readonly id?: string;
  readonly stack_set_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly template_body?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudformationStackSetArgs) {
    super(config, "resource", args, resourceName, "aws_cloudformation_stack_set");
  }
}