import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLoadBalancerBackendServerPolicyArgs {
  instance_port: number;
  load_balancer_name: string;
  policy_names?: string[];
}
export class aws_load_balancer_backend_server_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLoadBalancerBackendServerPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_load_balancer_backend_server_policy");
  }
}