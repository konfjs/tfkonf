import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsGuarddutyInviteAccepterArgsTimeouts {
  create?: string;
}
export interface AwsGuarddutyInviteAccepterArgs {
  detector_id: string;
  master_account_id: string;
  timeouts?: AwsGuarddutyInviteAccepterArgsTimeouts;
}
export class aws_guardduty_invite_accepter extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyInviteAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_invite_accepter");
  }
}