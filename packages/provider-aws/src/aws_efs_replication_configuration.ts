import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEfsReplicationConfigurationArgsDestination {
  availability_zone_name?: string;
  kms_key_id?: string;
}
export interface AwsEfsReplicationConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsEfsReplicationConfigurationArgs {
  source_file_system_id: string;
  destination: AwsEfsReplicationConfigurationArgsDestination;
  timeouts?: AwsEfsReplicationConfigurationArgsTimeouts;
}
export class aws_efs_replication_configuration extends TerraformResource {
  readonly creation_time!: string;
  readonly id?: string;
  readonly original_source_file_system_arn!: string;
  readonly source_file_system_arn!: string;
  readonly source_file_system_region!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEfsReplicationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_efs_replication_configuration");
  }
}