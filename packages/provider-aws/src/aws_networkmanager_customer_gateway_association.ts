import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsNetworkmanagerCustomerGatewayAssociationArgs {
  customer_gateway_arn: string;
  device_id: string;
  global_network_id: string;
  link_id?: string;
  timeouts: Timeouts;
}
export class aws_networkmanager_customer_gateway_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerCustomerGatewayAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_customer_gateway_association");
  }
}