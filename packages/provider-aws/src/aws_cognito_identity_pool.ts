import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoIdentityPoolArgsCognitoIdentityProviders {
  client_id?: string;
  provider_name?: string;
  server_side_token_check?: boolean;
}

export interface AwsCognitoIdentityPoolArgs {
  allow_classic_flow?: boolean;
  allow_unauthenticated_identities?: boolean;
  developer_provider_name?: string;
  identity_pool_name: string;
  openid_connect_provider_arns?: string[];
  saml_provider_arns?: string[];
  supported_login_providers?: { [key: string]: string };
  tags?: { [key: string]: string };
  cognito_identity_providers: AwsCognitoIdentityPoolArgsCognitoIdentityProviders;
}

export class aws_cognito_identity_pool extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoIdentityPoolArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_identity_pool");
  }
}
