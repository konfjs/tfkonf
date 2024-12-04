import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2TransitGatewayPolicyTableAssociationArgs {
  transit_gateway_attachment_id: string;
  transit_gateway_policy_table_id: string;
}

export class aws_ec2_transit_gateway_policy_table_association extends TerraformResource {
  readonly id?: string;
  readonly resource_id!: string;
  readonly resource_type!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayPolicyTableAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_policy_table_association");
  }
}
