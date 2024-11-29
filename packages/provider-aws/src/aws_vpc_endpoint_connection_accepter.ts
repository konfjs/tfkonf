import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpcEndpointConnectionAccepterArgs {
  vpc_endpoint_id: string;
  vpc_endpoint_service_id: string;
}
export class aws_vpc_endpoint_connection_accepter extends TerraformResource {
  readonly id?: string;
  readonly vpc_endpoint_state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcEndpointConnectionAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_endpoint_connection_accepter");
  }
}