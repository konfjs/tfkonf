import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMacie2InvitationAccepterArgsTimeouts {
  create?: string;
}
export interface AwsMacie2InvitationAccepterArgs {
  administrator_account_id: string;
  timeouts: AwsMacie2InvitationAccepterArgsTimeouts;
}
export class aws_macie2_invitation_accepter extends TerraformResource {
  readonly id?: string;
  readonly invitation_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMacie2InvitationAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_macie2_invitation_accepter");
  }
}