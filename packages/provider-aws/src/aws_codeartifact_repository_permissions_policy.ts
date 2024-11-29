import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCodeartifactRepositoryPermissionsPolicyArgs {
  domain: string;
  policy_document: string;
  repository: string;
}
export class aws_codeartifact_repository_permissions_policy extends TerraformResource {
  readonly domain_owner?: string;
  readonly id?: string;
  readonly policy_revision?: string;
  readonly resource_arn!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodeartifactRepositoryPermissionsPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_codeartifact_repository_permissions_policy");
  }
}