import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGuarddutyMemberArgsTimeouts {
  create?: string;
  update?: string;
}
export interface AwsGuarddutyMemberArgs {
  account_id: string;
  detector_id: string;
  disable_email_notification?: boolean;
  email: string;
  invitation_message?: string;
  invite?: boolean;
  timeouts: AwsGuarddutyMemberArgsTimeouts;
}
export class aws_guardduty_member extends TerraformResource {
  readonly id?: string;
  readonly relationship_status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyMemberArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_member");
  }
}