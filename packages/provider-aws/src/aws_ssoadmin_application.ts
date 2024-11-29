import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsoadminApplicationArgsPortalOptionsSignInOptions {
  application_url?: string;
  origin: string;
}
export interface AwsSsoadminApplicationArgsPortalOptions {
  sign_in_options: AwsSsoadminApplicationArgsPortalOptionsSignInOptions;
}
export interface AwsSsoadminApplicationArgs {
  application_provider_arn: string;
  client_token?: string;
  description?: string;
  instance_arn: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  portal_options: AwsSsoadminApplicationArgsPortalOptions;
}
export class aws_ssoadmin_application extends TerraformResource {
  readonly application_account!: string;
  readonly application_arn!: string;
  readonly id!: string;
  readonly status?: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_application");
  }
}