import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSesv2EmailIdentityMailFromAttributesArgs {
  behavior_on_mx_failure?: string;
  email_identity: string;
  mail_from_domain?: string;
}
export class aws_sesv2_email_identity_mail_from_attributes extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2EmailIdentityMailFromAttributesArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_email_identity_mail_from_attributes");
  }
}