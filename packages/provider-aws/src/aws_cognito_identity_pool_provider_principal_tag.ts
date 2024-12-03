import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCognitoIdentityPoolProviderPrincipalTagArgs {
  identity_pool_id: string;
  identity_provider_name: string;
  principal_tags?: {
    [key: string]: string;
  };
  use_defaults?: boolean;
}
export class aws_cognito_identity_pool_provider_principal_tag extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoIdentityPoolProviderPrincipalTagArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_identity_pool_provider_principal_tag");
  }
}