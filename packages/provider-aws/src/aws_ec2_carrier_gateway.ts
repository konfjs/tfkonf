import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2CarrierGatewayArgs {
  tags?: { [key: string]: string };
  vpc_id: string;
}

export class aws_ec2_carrier_gateway extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2CarrierGatewayArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_carrier_gateway");
  }
}
