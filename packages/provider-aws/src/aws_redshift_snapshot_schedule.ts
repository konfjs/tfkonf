import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRedshiftSnapshotScheduleArgs {
  definitions: string[];
  description?: string;
  force_destroy?: boolean;
  tags?: {
    [key: string]: string;
  };
}
export class aws_redshift_snapshot_schedule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly identifier?: string;
  readonly identifier_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftSnapshotScheduleArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_snapshot_schedule");
  }
}