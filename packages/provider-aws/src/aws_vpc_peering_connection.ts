import { TerraformConfig, TerraformResource } from "tfs";
export interface Accepter {
  allow_remote_vpc_dns_resolution?: boolean;
}
export interface Requester {
  allow_remote_vpc_dns_resolution?: boolean;
}
export interface Timeouts {
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
  accepter: Accepter;
  requester: Requester;
  timeouts: Timeouts;
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