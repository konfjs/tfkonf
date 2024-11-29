import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSesEmailIdentityArgs {
  email: string;
}
export class aws_ses_email_identity extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesEmailIdentityArgs) {
    super(config, "resource", args, resourceName, "aws_ses_email_identity");
  }
}