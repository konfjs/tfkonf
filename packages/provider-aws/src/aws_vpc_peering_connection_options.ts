import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpcPeeringConnectionOptionsArgsAccepter {
  allow_remote_vpc_dns_resolution?: boolean;
}
export interface AwsVpcPeeringConnectionOptionsArgsRequester {
  allow_remote_vpc_dns_resolution?: boolean;
}
export interface AwsVpcPeeringConnectionOptionsArgs {
  vpc_peering_connection_id: string;
  accepter: AwsVpcPeeringConnectionOptionsArgsAccepter;
  requester: AwsVpcPeeringConnectionOptionsArgsRequester;
}
export class aws_vpc_peering_connection_options extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcPeeringConnectionOptionsArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_peering_connection_options");
  }
}