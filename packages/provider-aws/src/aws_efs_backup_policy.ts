import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEfsBackupPolicyArgsBackupPolicy {
  status: string;
}
export interface AwsEfsBackupPolicyArgs {
  file_system_id: string;
  backup_policy: AwsEfsBackupPolicyArgsBackupPolicy;
}
export class aws_efs_backup_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEfsBackupPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_efs_backup_policy");
  }
}