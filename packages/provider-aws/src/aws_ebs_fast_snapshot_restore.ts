import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEbsFastSnapshotRestoreArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsEbsFastSnapshotRestoreArgs {
  availability_zone: string;
  snapshot_id: string;
  timeouts?: AwsEbsFastSnapshotRestoreArgsTimeouts;
}
export class aws_ebs_fast_snapshot_restore extends TerraformResource {
  readonly id!: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEbsFastSnapshotRestoreArgs) {
    super(config, "resource", args, resourceName, "aws_ebs_fast_snapshot_restore");
  }
}