import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsOpensearchDomainPolicyArgsTimeouts {
  delete?: string;
  update?: string;
}
export interface AwsOpensearchDomainPolicyArgs {
  access_policies: string;
  domain_name: string;
  timeouts: AwsOpensearchDomainPolicyArgsTimeouts;
}
export class aws_opensearch_domain_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchDomainPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_domain_policy");
  }
}