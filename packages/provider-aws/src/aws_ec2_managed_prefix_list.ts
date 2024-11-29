import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2ManagedPrefixListArgsEntry {
  cidr: string;
  description?: string;
}
export interface AwsEc2ManagedPrefixListArgs {
  address_family: string;
  max_entries: number;
  name: string;
  tags?: {
    [key: string]: string;
  };
  entry: AwsEc2ManagedPrefixListArgsEntry;
}
export class aws_ec2_managed_prefix_list extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2ManagedPrefixListArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_managed_prefix_list");
  }
}