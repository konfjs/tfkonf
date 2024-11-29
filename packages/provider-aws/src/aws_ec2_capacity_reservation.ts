import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2CapacityReservationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEc2CapacityReservationArgs {
  availability_zone: string;
  ebs_optimized?: boolean;
  end_date?: string;
  end_date_type?: string;
  ephemeral_storage?: boolean;
  instance_count: number;
  instance_match_criteria?: string;
  instance_platform: string;
  instance_type: string;
  outpost_arn?: string;
  placement_group_arn?: string;
  tags?: {
    [key: string]: string;
  };
  tenancy?: string;
  timeouts?: AwsEc2CapacityReservationArgsTimeouts;
}
export class aws_ec2_capacity_reservation extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2CapacityReservationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_capacity_reservation");
  }
}