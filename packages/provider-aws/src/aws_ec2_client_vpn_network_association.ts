import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2ClientVpnNetworkAssociationArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsEc2ClientVpnNetworkAssociationArgs {
  client_vpn_endpoint_id: string;
  subnet_id: string;
  timeouts: AwsEc2ClientVpnNetworkAssociationArgstimeouts;
}
export class aws_ec2_client_vpn_network_association extends TerraformResource {
  readonly association_id!: string;
  readonly id?: string;
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2ClientVpnNetworkAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_client_vpn_network_association");
  }
}