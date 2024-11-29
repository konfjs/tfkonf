import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2SubnetCidrReservationArgs {
  cidr_block: string;
  description?: string;
  reservation_type: string;
  subnet_id: string;
}
export class aws_ec2_subnet_cidr_reservation extends TerraformResource {
  readonly id?: string;
  readonly owner_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2SubnetCidrReservationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_subnet_cidr_reservation");
  }
}