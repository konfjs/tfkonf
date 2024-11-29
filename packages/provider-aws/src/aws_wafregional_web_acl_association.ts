import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsWafregionalWebAclAssociationArgsTimeouts {
  create?: string;
}
export interface AwsWafregionalWebAclAssociationArgs {
  resource_arn: string;
  web_acl_id: string;
  timeouts?: AwsWafregionalWebAclAssociationArgsTimeouts;
}
export class aws_wafregional_web_acl_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalWebAclAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_web_acl_association");
  }
}