import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsKmsKeyPolicyArgs {
  bypass_policy_lockout_safety_check?: boolean;
  key_id: string;
  policy: string;
}
export class aws_kms_key_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKmsKeyPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_kms_key_policy");
  }
}