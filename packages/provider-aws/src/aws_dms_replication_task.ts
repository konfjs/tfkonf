import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDmsReplicationTaskArgs {
  cdc_start_time?: string;
  migration_type: string;
  replication_instance_arn: string;
  replication_task_id: string;
  resource_identifier?: string;
  source_endpoint_arn: string;
  start_replication_task?: boolean;
  table_mappings: string;
  tags?: { [key: string]: string };
  target_endpoint_arn: string;
}

export class aws_dms_replication_task extends TerraformResource {
  readonly cdc_start_position?: string;
  readonly id?: string;
  readonly replication_task_arn!: string;
  readonly replication_task_settings?: string;
  readonly status!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsDmsReplicationTaskArgs) {
    super(config, "resource", args, resourceName, "aws_dms_replication_task");
  }
}
