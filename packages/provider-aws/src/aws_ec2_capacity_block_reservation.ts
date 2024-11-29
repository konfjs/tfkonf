import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2CapacityBlockReservationArgsTimeouts {
  create?: string;
}
export interface AwsEc2CapacityBlockReservationArgs {
  capacity_block_offering_id: string;
  instance_platform: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsEc2CapacityBlockReservationArgsTimeouts;
}
export class aws_ec2_capacity_block_reservation extends TerraformResource {
  readonly arn!: string;
  readonly availability_zone!: string;
  readonly created_date!: string;
  readonly ebs_optimized!: boolean;
  readonly end_date!: string;
  readonly end_date_type!: string;
  readonly id!: string;
  readonly instance_count!: number;
  readonly instance_type!: string;
  readonly outpost_arn!: string;
  readonly placement_group_arn!: string;
  readonly reservation_type!: string;
  readonly start_date!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly tenancy!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2CapacityBlockReservationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_capacity_block_reservation");
  }
}