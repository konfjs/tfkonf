import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEc2HostArgs {
  auto_placement?: string;
  availability_zone: string;
  host_recovery?: string;
  instance_family?: string;
  instance_type?: string;
  outpost_arn?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_ec2_host extends TerraformResource {
  readonly arn!: string;
  readonly asset_id?: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2HostArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_host");
  }
}