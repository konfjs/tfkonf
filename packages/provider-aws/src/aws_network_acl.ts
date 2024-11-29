import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsNetworkAclArgs {
  tags?: {
    [key: string]: string;
  };
  vpc_id: string;
}
export class aws_network_acl extends TerraformResource {
  readonly arn!: string;
  readonly egress?: any[];
  readonly id?: string;
  readonly ingress?: any[];
  readonly owner_id!: string;
  readonly subnet_ids?: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkAclArgs) {
    super(config, "resource", args, resourceName, "aws_network_acl");
  }
}