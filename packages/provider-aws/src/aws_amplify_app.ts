import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAmplifyAppArgsAutoBranchCreationConfig {
  basic_auth_credentials?: string;
  build_spec?: string;
  enable_auto_build?: boolean;
  enable_basic_auth?: boolean;
  enable_performance_mode?: boolean;
  enable_pull_request_preview?: boolean;
  environment_variables?: {
    [key: string]: string;
  };
  framework?: string;
  pull_request_environment_name?: string;
  stage?: string;
}
export interface AwsAmplifyAppArgsCacheConfig {
  type: string;
}
export interface AwsAmplifyAppArgsCustomRule {
  condition?: string;
  source: string;
  status?: string;
  target: string;
}
export interface AwsAmplifyAppArgs {
  access_token?: string;
  auto_branch_creation_patterns?: string[];
  basic_auth_credentials?: string;
  description?: string;
  enable_auto_branch_creation?: boolean;
  enable_basic_auth?: boolean;
  enable_branch_auto_build?: boolean;
  enable_branch_auto_deletion?: boolean;
  environment_variables?: {
    [key: string]: string;
  };
  iam_service_role_arn?: string;
  name: string;
  oauth_token?: string;
  platform?: string;
  repository?: string;
  tags?: {
    [key: string]: string;
  };
  auto_branch_creation_config: AwsAmplifyAppArgsAutoBranchCreationConfig;
  cache_config: AwsAmplifyAppArgsCacheConfig;
  custom_rule: AwsAmplifyAppArgsCustomRule;
}
export class aws_amplify_app extends TerraformResource {
  readonly arn!: string;
  readonly build_spec?: string;
  readonly custom_headers?: string;
  readonly default_domain!: string;
  readonly id?: string;
  readonly production_branch!: any[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAmplifyAppArgs) {
    super(config, "resource", args, resourceName, "aws_amplify_app");
  }
}