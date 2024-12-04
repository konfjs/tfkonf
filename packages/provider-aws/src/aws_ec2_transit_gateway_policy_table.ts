import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayPolicyTableArgs {
  tags?: { [key: string]: string };
  transit_gateway_id: string;
}

export class aws_ec2_transit_gateway_policy_table extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly state!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayPolicyTableArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_policy_table");
  }
}
