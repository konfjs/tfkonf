import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSecurityhubInviteAccepterArgs {
  master_id: string;
}
export class aws_securityhub_invite_accepter extends TerraformResource {
  readonly id?: string;
  readonly invitation_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubInviteAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_invite_accepter");
  }
}