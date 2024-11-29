import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMemorydbSnapshotArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsMemorydbSnapshotArgs {
  cluster_name: string;
  kms_key_arn?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsMemorydbSnapshotArgsTimeouts;
}
export class aws_memorydb_snapshot extends TerraformResource {
  readonly arn!: string;
  readonly cluster_configuration!: any[];
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly source!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMemorydbSnapshotArgs) {
    super(config, "resource", args, resourceName, "aws_memorydb_snapshot");
  }
}