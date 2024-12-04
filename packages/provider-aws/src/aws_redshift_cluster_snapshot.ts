import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftClusterSnapshotArgs {
  cluster_identifier: string;
  manual_snapshot_retention_period?: number;
  snapshot_identifier: string;
  tags?: { [key: string]: string };
}

export class aws_redshift_cluster_snapshot extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly kms_key_id!: string;
  readonly owner_account!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftClusterSnapshotArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_cluster_snapshot");
  }
}
