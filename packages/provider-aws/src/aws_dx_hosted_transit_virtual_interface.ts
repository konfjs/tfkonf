import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDxHostedTransitVirtualInterfaceArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDxHostedTransitVirtualInterfaceArgs {
  address_family: string;
  bgp_asn: number;
  connection_id: string;
  mtu?: number;
  name: string;
  owner_account_id: string;
  vlan: number;
  timeouts: AwsDxHostedTransitVirtualInterfaceArgstimeouts;
}
export class aws_dx_hosted_transit_virtual_interface extends TerraformResource {
  readonly amazon_address?: string;
  readonly amazon_side_asn!: string;
  readonly arn!: string;
  readonly aws_device!: string;
  readonly bgp_auth_key?: string;
  readonly customer_address?: string;
  readonly id?: string;
  readonly jumbo_frame_capable!: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxHostedTransitVirtualInterfaceArgs) {
    super(config, "resource", args, resourceName, "aws_dx_hosted_transit_virtual_interface");
  }
}