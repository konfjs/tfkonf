import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDefaultSecurityGroupArgs {
  revoke_rules_on_delete?: boolean;
  tags?: {
    [key: string]: string;
  };
}
export class aws_default_security_group extends TerraformResource {
  readonly arn!: string;
  readonly description!: string;
  readonly egress?: any[];
  readonly id?: string;
  readonly ingress?: any[];
  readonly name!: string;
  readonly name_prefix!: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDefaultSecurityGroupArgs) {
    super(config, "resource", args, resourceName, "aws_default_security_group");
  }
}