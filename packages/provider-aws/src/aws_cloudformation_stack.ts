import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudformationStackArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCloudformationStackArgs {
  capabilities?: string[];
  disable_rollback?: boolean;
  iam_role_arn?: string;
  name: string;
  notification_arns?: string[];
  on_failure?: string;
  policy_url?: string;
  tags?: {
    [key: string]: string;
  };
  template_url?: string;
  timeout_in_minutes?: number;
  timeouts: AwsCloudformationStackArgsTimeouts;
}
export class aws_cloudformation_stack extends TerraformResource {
  readonly id?: string;
  readonly outputs!: {
    [key: string]: string;
  };
  readonly parameters?: {
    [key: string]: string;
  };
  readonly policy_body?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly template_body?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudformationStackArgs) {
    super(config, "resource", args, resourceName, "aws_cloudformation_stack");
  }
}