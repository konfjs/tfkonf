import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
}
export interface AwsGuarddutyInviteAccepterArgs {
  detector_id: string;
  master_account_id: string;
  timeouts: Timeouts;
}
export class aws_guardduty_invite_accepter extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyInviteAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_invite_accepter");
  }
}