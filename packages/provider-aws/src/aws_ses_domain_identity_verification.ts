import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSesDomainIdentityVerificationArgstimeouts {
  create?: string;
}
export interface AwsSesDomainIdentityVerificationArgs {
  domain: string;
  timeouts: AwsSesDomainIdentityVerificationArgstimeouts;
}
export class aws_ses_domain_identity_verification extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesDomainIdentityVerificationArgs) {
    super(config, "resource", args, resourceName, "aws_ses_domain_identity_verification");
  }
}