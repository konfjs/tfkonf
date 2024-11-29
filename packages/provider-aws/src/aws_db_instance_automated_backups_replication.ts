import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDbInstanceAutomatedBackupsReplicationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDbInstanceAutomatedBackupsReplicationArgs {
  pre_signed_url?: string;
  retention_period?: number;
  source_db_instance_arn: string;
  timeouts: AwsDbInstanceAutomatedBackupsReplicationArgsTimeouts;
}
export class aws_db_instance_automated_backups_replication extends TerraformResource {
  readonly id?: string;
  readonly kms_key_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbInstanceAutomatedBackupsReplicationArgs) {
    super(config, "resource", args, resourceName, "aws_db_instance_automated_backups_replication");
  }
}