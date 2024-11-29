import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCodeartifactDomainPermissionsPolicyArgs {
  domain: string;
  policy_document: string;
}
export class aws_codeartifact_domain_permissions_policy extends TerraformResource {
  readonly domain_owner?: string;
  readonly id?: string;
  readonly policy_revision?: string;
  readonly resource_arn!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodeartifactDomainPermissionsPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_codeartifact_domain_permissions_policy");
  }
}