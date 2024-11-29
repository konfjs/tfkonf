import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsNetworkfirewallResourcePolicyArgs {
  policy: string;
  resource_arn: string;
}
export class aws_networkfirewall_resource_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkfirewallResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_networkfirewall_resource_policy");
  }
}