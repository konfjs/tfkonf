import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDxPublicVirtualInterfaceArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDxPublicVirtualInterfaceArgs {
  address_family: string;
  bgp_asn: number;
  connection_id: string;
  name: string;
  route_filter_prefixes: string[];
  tags?: {
    [key: string]: string;
  };
  vlan: number;
  timeouts?: AwsDxPublicVirtualInterfaceArgsTimeouts;
}
export class aws_dx_public_virtual_interface extends TerraformResource {
  readonly amazon_address?: string;
  readonly amazon_side_asn!: string;
  readonly arn!: string;
  readonly aws_device!: string;
  readonly bgp_auth_key?: string;
  readonly customer_address?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxPublicVirtualInterfaceArgs) {
    super(config, "resource", args, resourceName, "aws_dx_public_virtual_interface");
  }
}