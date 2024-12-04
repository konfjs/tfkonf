import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesDomainIdentityArgs {
  domain: string;
}

export class aws_ses_domain_identity extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly verification_token!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSesDomainIdentityArgs) {
    super(config, "resource", args, resourceName, "aws_ses_domain_identity");
  }
}
