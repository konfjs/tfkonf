import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSecurityGroupArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsSecurityGroupArgs {
  description?: string;
  revoke_rules_on_delete?: boolean;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsSecurityGroupArgsTimeouts;
}
export class aws_security_group extends TerraformResource {
  readonly arn!: string;
  readonly egress?: any[];
  readonly id?: string;
  readonly ingress?: any[];
  readonly name?: string;
  readonly name_prefix?: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityGroupArgs) {
    super(config, "resource", args, resourceName, "aws_security_group");
  }
}