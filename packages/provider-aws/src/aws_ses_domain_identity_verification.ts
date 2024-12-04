import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesDomainIdentityVerificationArgsTimeouts {
  create?: string;
}

export interface AwsSesDomainIdentityVerificationArgs {
  domain: string;
  timeouts?: AwsSesDomainIdentityVerificationArgsTimeouts;
}

export class aws_ses_domain_identity_verification extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSesDomainIdentityVerificationArgs) {
    super(config, "resource", args, resourceName, "aws_ses_domain_identity_verification");
  }
}
