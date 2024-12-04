import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesDomainMailFromArgs {
  behavior_on_mx_failure?: string;
  domain: string;
  mail_from_domain: string;
}

export class aws_ses_domain_mail_from extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSesDomainMailFromArgs) {
    super(config, "resource", args, resourceName, "aws_ses_domain_mail_from");
  }
}
