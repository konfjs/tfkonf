import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKinesisanalyticsv2ApplicationSnapshotArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsKinesisanalyticsv2ApplicationSnapshotArgs {
  application_name: string;
  snapshot_name: string;
  timeouts: AwsKinesisanalyticsv2ApplicationSnapshotArgstimeouts;
}
export class aws_kinesisanalyticsv2_application_snapshot extends TerraformResource {
  readonly application_version_id!: number;
  readonly id?: string;
  readonly snapshot_creation_timestamp!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKinesisanalyticsv2ApplicationSnapshotArgs) {
    super(config, "resource", args, resourceName, "aws_kinesisanalyticsv2_application_snapshot");
  }
}