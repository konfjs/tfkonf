import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAppsyncDomainNameApiAssociationArgs {
  api_id: string;
  domain_name: string;
}
export class aws_appsync_domain_name_api_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppsyncDomainNameApiAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_appsync_domain_name_api_association");
  }
}