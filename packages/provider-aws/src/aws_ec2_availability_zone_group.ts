import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2AvailabilityZoneGroupArgs {
  group_name: string;
  opt_in_status: string;
}
export class aws_ec2_availability_zone_group extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2AvailabilityZoneGroupArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_availability_zone_group");
  }
}