import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2TransitGatewayPrefixListReferenceArgs {
  blackhole?: boolean;
  prefix_list_id: string;
  transit_gateway_attachment_id?: string;
  transit_gateway_route_table_id: string;
}
export class aws_ec2_transit_gateway_prefix_list_reference extends TerraformResource {
  readonly id?: string;
  readonly prefix_list_owner_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TransitGatewayPrefixListReferenceArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_transit_gateway_prefix_list_reference");
  }
}