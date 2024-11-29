import { TerraformConfig, TerraformResource } from "tfs";
export interface AutoDeployment {
  enabled?: boolean;
  retain_stacks_on_account_removal?: boolean;
}
export interface ManagedExecution {
  active?: boolean;
}
export interface OperationPreferences {
  failure_tolerance_count?: number;
  failure_tolerance_percentage?: number;
  max_concurrent_count?: number;
  max_concurrent_percentage?: number;
  region_concurrency_type?: string;
  region_order?: string[];
}
export interface Timeouts {
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
  auto_deployment: AutoDeployment;
  managed_execution: ManagedExecution;
  operation_preferences: OperationPreferences;
  timeouts: Timeouts;
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