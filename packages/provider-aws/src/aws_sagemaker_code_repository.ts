import { TerraformConfig, TerraformResource } from "tfs";
export interface GitConfig {
  branch?: string;
  repository_url: string;
  secret_arn?: string;
}
export interface AwsSagemakerCodeRepositoryArgs {
  code_repository_name: string;
  tags?: {
    [key: string]: string;
  };
  git_config: GitConfig;
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