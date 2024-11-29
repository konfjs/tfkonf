import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCodecommitRepositoryArgs {
  default_branch?: string;
  description?: string;
  repository_name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_codecommit_repository extends TerraformResource {
  readonly arn!: string;
  readonly clone_url_http!: string;
  readonly clone_url_ssh!: string;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly repository_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodecommitRepositoryArgs) {
    super(config, "resource", args, resourceName, "aws_codecommit_repository");
  }
}