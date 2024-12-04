import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftSnapshotScheduleAssociationArgs {
  cluster_identifier: string;
  schedule_identifier: string;
}

export class aws_redshift_snapshot_schedule_association extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftSnapshotScheduleAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_snapshot_schedule_association");
  }
}
