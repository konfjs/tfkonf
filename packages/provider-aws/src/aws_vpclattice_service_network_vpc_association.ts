import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpclatticeServiceNetworkVpcAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpclatticeServiceNetworkVpcAssociationArgs {
  security_group_ids?: string[];
  service_network_identifier: string;
  tags?: {
    [key: string]: string;
  };
  vpc_identifier: string;
  timeouts: AwsVpclatticeServiceNetworkVpcAssociationArgsTimeouts;
}
export class aws_vpclattice_service_network_vpc_association extends TerraformResource {
  readonly arn!: string;
  readonly created_by!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeServiceNetworkVpcAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_service_network_vpc_association");
  }
}