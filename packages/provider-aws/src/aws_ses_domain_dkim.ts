import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSesDomainDkimArgs {
  domain: string;
}
export class aws_ses_domain_dkim extends TerraformResource {
  readonly dkim_tokens!: string[];
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesDomainDkimArgs) {
    super(config, "resource", args, resourceName, "aws_ses_domain_dkim");
  }
}