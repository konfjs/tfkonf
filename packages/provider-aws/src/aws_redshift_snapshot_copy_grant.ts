import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftSnapshotCopyGrantArgs {
  snapshot_copy_grant_name: string;
  tags?: { [key: string]: string };
}

export class aws_redshift_snapshot_copy_grant extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftSnapshotCopyGrantArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_snapshot_copy_grant");
  }
}
