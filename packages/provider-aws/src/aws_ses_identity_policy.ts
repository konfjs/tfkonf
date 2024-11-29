import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSesIdentityPolicyArgs {
  identity: string;
  name: string;
  policy: string;
}
export class aws_ses_identity_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesIdentityPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_ses_identity_policy");
  }
}