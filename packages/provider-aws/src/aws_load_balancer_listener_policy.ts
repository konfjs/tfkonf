import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLoadBalancerListenerPolicyArgs {
  load_balancer_name: string;
  load_balancer_port: number;
  policy_names?: string[];
  triggers?: {
    [key: string]: string;
  };
}
export class aws_load_balancer_listener_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLoadBalancerListenerPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_load_balancer_listener_policy");
  }
}