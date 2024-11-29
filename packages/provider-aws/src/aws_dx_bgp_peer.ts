import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDxBgpPeerArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDxBgpPeerArgs {
  address_family: string;
  bgp_asn: number;
  virtual_interface_id: string;
  timeouts: AwsDxBgpPeerArgsTimeouts;
}
export class aws_dx_bgp_peer extends TerraformResource {
  readonly amazon_address?: string;
  readonly aws_device!: string;
  readonly bgp_auth_key?: string;
  readonly bgp_peer_id!: string;
  readonly bgp_status!: string;
  readonly customer_address?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxBgpPeerArgs) {
    super(config, "resource", args, resourceName, "aws_dx_bgp_peer");
  }
}