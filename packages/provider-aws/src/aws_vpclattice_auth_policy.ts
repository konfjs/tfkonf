import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpclatticeAuthPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpclatticeAuthPolicyArgs {
  policy: string;
  resource_identifier: string;
  state?: string;
  timeouts?: AwsVpclatticeAuthPolicyArgsTimeouts;
}
export class aws_vpclattice_auth_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeAuthPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_auth_policy");
  }
}