import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVpcSecurityGroupVpcAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsVpcSecurityGroupVpcAssociationArgs {
  security_group_id: string;
  vpc_id: string;
  timeouts?: AwsVpcSecurityGroupVpcAssociationArgsTimeouts;
}
export class aws_vpc_security_group_vpc_association extends TerraformResource {
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcSecurityGroupVpcAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_security_group_vpc_association");
  }
}