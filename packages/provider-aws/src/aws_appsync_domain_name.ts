import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAppsyncDomainNameArgs {
  certificate_arn: string;
  description?: string;
  domain_name: string;
}
export class aws_appsync_domain_name extends TerraformResource {
  readonly appsync_domain_name!: string;
  readonly hosted_zone_id!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppsyncDomainNameArgs) {
    super(config, "resource", args, resourceName, "aws_appsync_domain_name");
  }
}