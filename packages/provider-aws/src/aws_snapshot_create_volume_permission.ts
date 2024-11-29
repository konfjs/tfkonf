import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSnapshotCreateVolumePermissionArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsSnapshotCreateVolumePermissionArgs {
  account_id: string;
  snapshot_id: string;
  timeouts: AwsSnapshotCreateVolumePermissionArgstimeouts;
}
export class aws_snapshot_create_volume_permission extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSnapshotCreateVolumePermissionArgs) {
    super(config, "resource", args, resourceName, "aws_snapshot_create_volume_permission");
  }
}