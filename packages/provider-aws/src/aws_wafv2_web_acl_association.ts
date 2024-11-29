import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWafv2WebAclAssociationArgstimeouts {
  create?: string;
}
export interface AwsWafv2WebAclAssociationArgs {
  resource_arn: string;
  web_acl_arn: string;
  timeouts: AwsWafv2WebAclAssociationArgstimeouts;
}
export class aws_wafv2_web_acl_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafv2WebAclAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_wafv2_web_acl_association");
  }
}