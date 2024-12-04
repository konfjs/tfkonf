import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2EmailIdentityPolicyArgs {
  email_identity: string;
  policy: string;
  policy_name: string;
}

export class aws_sesv2_email_identity_policy extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2EmailIdentityPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_email_identity_policy");
  }
}
