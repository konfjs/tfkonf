import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVpcPeeringConnectionArgsAccepter {
  allow_remote_vpc_dns_resolution?: boolean;
}
export interface AwsVpcPeeringConnectionArgsRequester {
  allow_remote_vpc_dns_resolution?: boolean;
}
export interface AwsVpcPeeringConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpcPeeringConnectionArgs {
  auto_accept?: boolean;
  peer_vpc_id: string;
  tags?: {
    [key: string]: string;
  };
  vpc_id: string;
  accepter: AwsVpcPeeringConnectionArgsAccepter;
  requester: AwsVpcPeeringConnectionArgsRequester;
  timeouts?: AwsVpcPeeringConnectionArgsTimeouts;
}
export class aws_vpc_peering_connection extends TerraformResource {
  readonly accept_status!: string;
  readonly id?: string;
  readonly peer_owner_id?: string;
  readonly peer_region?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcPeeringConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_peering_connection");
  }
}