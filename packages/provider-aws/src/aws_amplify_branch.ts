import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAmplifyBranchArgs {
  app_id: string;
  backend_environment_arn?: string;
  basic_auth_credentials?: string;
  branch_name: string;
  description?: string;
  enable_auto_build?: boolean;
  enable_basic_auth?: boolean;
  enable_notification?: boolean;
  enable_performance_mode?: boolean;
  enable_pull_request_preview?: boolean;
  environment_variables?: { [key: string]: string };
  framework?: string;
  pull_request_environment_name?: string;
  stage?: string;
  tags?: { [key: string]: string };
  ttl?: string;
}

export class aws_amplify_branch extends TerraformResource {
  readonly arn!: string;
  readonly associated_resources!: string[];
  readonly custom_domains!: string[];
  readonly destination_branch!: string;
  readonly display_name?: string;
  readonly id?: string;
  readonly source_branch!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsAmplifyBranchArgs) {
    super(config, "resource", args, resourceName, "aws_amplify_branch");
  }
}
