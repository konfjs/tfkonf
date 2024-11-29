import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBackupLogicallyAirGappedVaultArgsTimeouts {
  create?: string;
}
export interface AwsBackupLogicallyAirGappedVaultArgs {
  max_retention_days: number;
  min_retention_days: number;
  name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsBackupLogicallyAirGappedVaultArgsTimeouts;
}
export class aws_backup_logically_air_gapped_vault extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupLogicallyAirGappedVaultArgs) {
    super(config, "resource", args, resourceName, "aws_backup_logically_air_gapped_vault");
  }
}