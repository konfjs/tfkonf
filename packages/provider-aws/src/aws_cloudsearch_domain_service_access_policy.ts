import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudsearchDomainServiceAccessPolicyArgsTimeouts {
  delete?: string;
  update?: string;
}

export interface AwsCloudsearchDomainServiceAccessPolicyArgs {
  access_policy: string;
  domain_name: string;
  timeouts?: AwsCloudsearchDomainServiceAccessPolicyArgsTimeouts;
}

export class aws_cloudsearch_domain_service_access_policy extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudsearchDomainServiceAccessPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudsearch_domain_service_access_policy");
  }
}
