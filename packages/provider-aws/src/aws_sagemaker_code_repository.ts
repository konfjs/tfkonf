import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSagemakerCodeRepositoryArgsGitConfig {
  branch?: string;
  repository_url: string;
  secret_arn?: string;
}
export interface AwsSagemakerCodeRepositoryArgs {
  code_repository_name: string;
  tags?: {
    [key: string]: string;
  };
  git_config: AwsSagemakerCodeRepositoryArgsGitConfig;
}
export class aws_sagemaker_code_repository extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerCodeRepositoryArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_code_repository");
  }
}