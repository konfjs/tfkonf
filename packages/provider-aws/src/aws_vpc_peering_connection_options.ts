import { TerraformConfig, TerraformResource } from "tfs";
export interface Accepter {
  allow_remote_vpc_dns_resolution?: boolean;
}
export interface Requester {
  allow_remote_vpc_dns_resolution?: boolean;
}
export interface AwsVpcPeeringConnectionOptionsArgs {
  vpc_peering_connection_id: string;
  accepter: Accepter;
  requester: Requester;
}
export class aws_vpc_peering_connection_options extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcPeeringConnectionOptionsArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_peering_connection_options");
  }
}