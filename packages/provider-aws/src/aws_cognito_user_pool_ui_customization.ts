import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoUserPoolUiCustomizationArgs {
  client_id?: string;
  css?: string;
  image_file?: string;
  user_pool_id: string;
}

export class aws_cognito_user_pool_ui_customization extends TerraformResource {
  readonly creation_date!: string;
  readonly css_version!: string;
  readonly id?: string;
  readonly image_url!: string;
  readonly last_modified_date!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoUserPoolUiCustomizationArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_user_pool_ui_customization");
  }
}
