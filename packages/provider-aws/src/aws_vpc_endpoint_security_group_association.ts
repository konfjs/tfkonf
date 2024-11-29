import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpcEndpointSecurityGroupAssociationArgs {
  replace_default_association?: boolean;
  security_group_id: string;
  vpc_endpoint_id: string;
}
export class aws_vpc_endpoint_security_group_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcEndpointSecurityGroupAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_endpoint_security_group_association");
  }
}