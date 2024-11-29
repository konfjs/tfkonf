import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEbsVolumeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEbsVolumeArgs {
  availability_zone: string;
  final_snapshot?: boolean;
  multi_attach_enabled?: boolean;
  outpost_arn?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsEbsVolumeArgsTimeouts;
}
export class aws_ebs_volume extends TerraformResource {
  readonly arn!: string;
  readonly encrypted?: boolean;
  readonly id?: string;
  readonly iops?: number;
  readonly kms_key_id?: string;
  readonly size?: number;
  readonly snapshot_id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly throughput?: number;
  readonly type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEbsVolumeArgs) {
    super(config, "resource", args, resourceName, "aws_ebs_volume");
  }
}