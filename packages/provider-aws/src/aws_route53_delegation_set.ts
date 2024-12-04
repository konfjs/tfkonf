import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53DelegationSetArgs {
  reference_name?: string;
}

export class aws_route53_delegation_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name_servers!: string[];

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53DelegationSetArgs) {
    super(config, "resource", args, resourceName, "aws_route53_delegation_set");
  }
}
