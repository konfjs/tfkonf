import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsProxyProtocolPolicyArgs {
  instance_ports: string[];
  load_balancer: string;
}
export class aws_proxy_protocol_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsProxyProtocolPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_proxy_protocol_policy");
  }
}