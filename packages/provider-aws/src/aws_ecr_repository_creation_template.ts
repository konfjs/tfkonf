import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEcrRepositoryCreationTemplateArgsEncryptionConfiguration {
  encryption_type?: string;
}
export interface AwsEcrRepositoryCreationTemplateArgs {
  applied_for: string[];
  custom_role_arn?: string;
  description?: string;
  image_tag_mutability?: string;
  lifecycle_policy?: string;
  prefix: string;
  repository_policy?: string;
  resource_tags?: {
    [key: string]: string;
  };
  encryption_configuration: AwsEcrRepositoryCreationTemplateArgsEncryptionConfiguration;
}
export class aws_ecr_repository_creation_template extends TerraformResource {
  readonly id?: string;
  readonly registry_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrRepositoryCreationTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_ecr_repository_creation_template");
  }
}