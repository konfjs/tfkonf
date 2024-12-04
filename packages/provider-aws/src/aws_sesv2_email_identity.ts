import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2EmailIdentityArgsDkimSigningAttributes {
  domain_signing_private_key?: string;
  domain_signing_selector?: string;
}

export interface AwsSesv2EmailIdentityArgs {
  configuration_set_name?: string;
  email_identity: string;
  tags?: { [key: string]: string };
  dkim_signing_attributes: AwsSesv2EmailIdentityArgsDkimSigningAttributes;
}

export class aws_sesv2_email_identity extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly identity_type!: string;
  readonly tags_all?: { [key: string]: string };
  readonly verified_for_sending_status!: boolean;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2EmailIdentityArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_email_identity");
  }
}
