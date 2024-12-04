import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLoadBalancerPolicyArgsPolicyAttribute {
  name?: string;
  value?: string;
}

export interface AwsLoadBalancerPolicyArgs {
  load_balancer_name: string;
  policy_name: string;
  policy_type_name: string;
  policy_attribute: AwsLoadBalancerPolicyArgsPolicyAttribute;
}

export class aws_load_balancer_policy extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLoadBalancerPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_load_balancer_policy");
  }
}
