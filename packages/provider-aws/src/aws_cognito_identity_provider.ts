import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoIdentityProviderArgs {
  idp_identifiers?: string[];
  provider_details: { [key: string]: string };
  provider_name: string;
  provider_type: string;
  user_pool_id: string;
}

export class aws_cognito_identity_provider extends TerraformResource {
  readonly attribute_mapping?: { [key: string]: string };
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoIdentityProviderArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_identity_provider");
  }
}
