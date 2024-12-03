import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDetectiveInvitationAccepterArgs {
  graph_arn: string;
}
export class aws_detective_invitation_accepter extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDetectiveInvitationAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_detective_invitation_accepter");
  }
}