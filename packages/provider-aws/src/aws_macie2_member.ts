import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMacie2MemberArgsTimeouts {
  create?: string;
  update?: string;
}
export interface AwsMacie2MemberArgs {
  account_id: string;
  email: string;
  invitation_disable_email_notification?: boolean;
  invitation_message?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsMacie2MemberArgsTimeouts;
}
export class aws_macie2_member extends TerraformResource {
  readonly administrator_account_id!: string;
  readonly arn!: string;
  readonly id?: string;
  readonly invite?: boolean;
  readonly invited_at!: string;
  readonly master_account_id!: string;
  readonly relationship_status!: string;
  readonly status?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly updated_at!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMacie2MemberArgs) {
    super(config, "resource", args, resourceName, "aws_macie2_member");
  }
}