import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  delete?: string;
  update?: string;
}
export interface AwsElasticsearchDomainPolicyArgs {
  access_policies: string;
  domain_name: string;
  timeouts: Timeouts;
}
export class aws_elasticsearch_domain_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticsearchDomainPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_elasticsearch_domain_policy");
  }
}