import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDxTransitVirtualInterfaceArgs {
  address_family: string;
  bgp_asn: number;
  connection_id: string;
  dx_gateway_id: string;
  mtu?: number;
  name: string;
  sitelink_enabled?: boolean;
  tags?: {
    [key: string]: string;
  };
  vlan: number;
  timeouts: Timeouts;
}
export class aws_dx_transit_virtual_interface extends TerraformResource {
  readonly amazon_address?: string;
  readonly amazon_side_asn!: string;
  readonly arn!: string;
  readonly aws_device!: string;
  readonly bgp_auth_key?: string;
  readonly customer_address?: string;
  readonly id?: string;
  readonly jumbo_frame_capable!: boolean;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxTransitVirtualInterfaceArgs) {
    super(config, "resource", args, resourceName, "aws_dx_transit_virtual_interface");
  }
}