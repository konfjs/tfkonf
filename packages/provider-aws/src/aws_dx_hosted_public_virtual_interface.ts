import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDxHostedPublicVirtualInterfaceArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDxHostedPublicVirtualInterfaceArgs {
  address_family: string;
  bgp_asn: number;
  connection_id: string;
  name: string;
  owner_account_id: string;
  route_filter_prefixes: string[];
  vlan: number;
  timeouts?: AwsDxHostedPublicVirtualInterfaceArgsTimeouts;
}

export class aws_dx_hosted_public_virtual_interface extends TerraformResource {
  readonly amazon_address?: string;
  readonly amazon_side_asn!: string;
  readonly arn!: string;
  readonly aws_device!: string;
  readonly bgp_auth_key?: string;
  readonly customer_address?: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDxHostedPublicVirtualInterfaceArgs) {
    super(config, "resource", args, resourceName, "aws_dx_hosted_public_virtual_interface");
  }
}
