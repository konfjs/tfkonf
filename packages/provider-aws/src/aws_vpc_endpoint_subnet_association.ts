import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpcEndpointSubnetAssociationArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsVpcEndpointSubnetAssociationArgs {
  subnet_id: string;
  vpc_endpoint_id: string;
  timeouts: AwsVpcEndpointSubnetAssociationArgstimeouts;
}
export class aws_vpc_endpoint_subnet_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcEndpointSubnetAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_endpoint_subnet_association");
  }
}