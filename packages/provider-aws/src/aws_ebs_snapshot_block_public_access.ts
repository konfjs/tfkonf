import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEbsSnapshotBlockPublicAccessArgs {
  state: string;
}

export class aws_ebs_snapshot_block_public_access extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEbsSnapshotBlockPublicAccessArgs) {
    super(config, "resource", args, resourceName, "aws_ebs_snapshot_block_public_access");
  }
}
