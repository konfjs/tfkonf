import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsNetworkmanagerCustomerGatewayAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsNetworkmanagerCustomerGatewayAssociationArgs {
  customer_gateway_arn: string;
  device_id: string;
  global_network_id: string;
  link_id?: string;
  timeouts?: AwsNetworkmanagerCustomerGatewayAssociationArgsTimeouts;
}
export class aws_networkmanager_customer_gateway_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerCustomerGatewayAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_customer_gateway_association");
  }
}