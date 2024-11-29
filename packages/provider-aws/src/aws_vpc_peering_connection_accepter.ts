import { TerraformConfig, TerraformResource } from "tfs";
export interface Accepter {
  allow_remote_vpc_dns_resolution?: boolean;
}
export interface Requester {
  allow_remote_vpc_dns_resolution?: boolean;
}
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsVpcPeeringConnectionAccepterArgs {
  auto_accept?: boolean;
  tags?: {
    [key: string]: string;
  };
  vpc_peering_connection_id: string;
  accepter: Accepter;
  requester: Requester;
  timeouts: Timeouts;
}
export class aws_vpc_peering_connection_accepter extends TerraformResource {
  readonly accept_status!: string;
  readonly id?: string;
  readonly peer_owner_id!: string;
  readonly peer_region!: string;
  readonly peer_vpc_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcPeeringConnectionAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_peering_connection_accepter");
  }
}