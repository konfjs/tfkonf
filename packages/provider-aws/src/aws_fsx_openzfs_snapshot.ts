import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsFsxOpenzfsSnapshotArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsFsxOpenzfsSnapshotArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  volume_id: string;
  timeouts: AwsFsxOpenzfsSnapshotArgsTimeouts;
}
export class aws_fsx_openzfs_snapshot extends TerraformResource {
  readonly arn!: string;
  readonly creation_time!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxOpenzfsSnapshotArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_openzfs_snapshot");
  }
}