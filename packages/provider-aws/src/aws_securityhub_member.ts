import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubMemberArgs {
  account_id: string;
  email?: string;
  invite?: boolean;
}

export class aws_securityhub_member extends TerraformResource {
  readonly id?: string;
  readonly master_id!: string;
  readonly member_status!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubMemberArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_member");
  }
}
