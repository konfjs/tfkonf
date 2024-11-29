import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRedshiftSnapshotCopyArgs {
  cluster_identifier: string;
  destination_region: string;
  snapshot_copy_grant_name?: string;
}
export class aws_redshift_snapshot_copy extends TerraformResource {
  readonly id!: string;
  readonly manual_snapshot_retention_period?: number;
  readonly retention_period?: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftSnapshotCopyArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_snapshot_copy");
  }
}