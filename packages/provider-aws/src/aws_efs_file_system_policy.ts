import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEfsFileSystemPolicyArgs {
  bypass_policy_lockout_safety_check?: boolean;
  file_system_id: string;
  policy: string;
}
export class aws_efs_file_system_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEfsFileSystemPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_efs_file_system_policy");
  }
}