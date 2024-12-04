import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2EmailIdentityFeedbackAttributesArgs {
  email_forwarding_enabled?: boolean;
  email_identity: string;
}

export class aws_sesv2_email_identity_feedback_attributes extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2EmailIdentityFeedbackAttributesArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_email_identity_feedback_attributes");
  }
}
