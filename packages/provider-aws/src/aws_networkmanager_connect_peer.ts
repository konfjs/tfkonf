import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsNetworkmanagerConnectPeerArgsBgpOptions {
  peer_asn?: number;
}
export interface AwsNetworkmanagerConnectPeerArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsNetworkmanagerConnectPeerArgs {
  connect_attachment_id: string;
  core_network_address?: string;
  inside_cidr_blocks?: string[];
  peer_address: string;
  subnet_arn?: string;
  tags?: {
    [key: string]: string;
  };
  bgp_options: AwsNetworkmanagerConnectPeerArgsBgpOptions;
  timeouts: AwsNetworkmanagerConnectPeerArgsTimeouts;
}
export class aws_networkmanager_connect_peer extends TerraformResource {
  readonly arn!: string;
  readonly configuration!: any[];
  readonly connect_peer_id!: string;
  readonly core_network_id!: string;
  readonly created_at!: string;
  readonly edge_location!: string;
  readonly id?: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerConnectPeerArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_connect_peer");
  }
}