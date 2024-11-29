import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppstreamUserStackAssociationArgs {
  authentication_type: string;
  send_email_notification?: boolean;
  stack_name: string;
  user_name: string;
}
export class aws_appstream_user_stack_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppstreamUserStackAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_appstream_user_stack_association");
  }
}