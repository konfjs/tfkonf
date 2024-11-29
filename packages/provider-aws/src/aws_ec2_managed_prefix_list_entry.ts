import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2ManagedPrefixListEntryArgs {
  cidr: string;
  description?: string;
  prefix_list_id: string;
}
export class aws_ec2_managed_prefix_list_entry extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2ManagedPrefixListEntryArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_managed_prefix_list_entry");
  }
}