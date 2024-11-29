import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsNetworkAclAssociationArgs {
  network_acl_id: string;
  subnet_id: string;
}
export class aws_network_acl_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkAclAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_network_acl_association");
  }
}