import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVpclatticeResourcePolicyArgs {
  policy: string;
  resource_arn: string;
}
export class aws_vpclattice_resource_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_resource_policy");
  }
}