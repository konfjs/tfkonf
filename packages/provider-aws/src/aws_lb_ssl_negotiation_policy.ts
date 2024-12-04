import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbSslNegotiationPolicyArgsAttribute {
  name: string;
  value: string;
}

export interface AwsLbSslNegotiationPolicyArgs {
  lb_port: number;
  load_balancer: string;
  name: string;
  triggers?: { [key: string]: string };
  attribute: AwsLbSslNegotiationPolicyArgsAttribute;
}

export class aws_lb_ssl_negotiation_policy extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLbSslNegotiationPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_lb_ssl_negotiation_policy");
  }
}
