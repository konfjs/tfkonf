import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCognitoManagedUserPoolClientArgsAnalyticsConfiguration {
  application_arn?: string;
  application_id?: string;
  external_id?: string;
}
export interface AwsCognitoManagedUserPoolClientArgsTokenValidityUnits {}
export interface AwsCognitoManagedUserPoolClientArgs {
  name_pattern?: string;
  name_prefix?: string;
  user_pool_id: string;
  analytics_configuration: AwsCognitoManagedUserPoolClientArgsAnalyticsConfiguration;
  token_validity_units: AwsCognitoManagedUserPoolClientArgsTokenValidityUnits;
}
export class aws_cognito_managed_user_pool_client extends TerraformResource {
  readonly access_token_validity?: number;
  readonly allowed_oauth_flows?: string[];
  readonly allowed_oauth_flows_user_pool_client?: boolean;
  readonly allowed_oauth_scopes?: string[];
  readonly auth_session_validity?: number;
  readonly callback_urls?: string[];
  readonly client_secret!: string;
  readonly default_redirect_uri?: string;
  readonly enable_propagate_additional_user_context_data?: boolean;
  readonly enable_token_revocation?: boolean;
  readonly explicit_auth_flows?: string[];
  readonly id!: string;
  readonly id_token_validity?: number;
  readonly logout_urls?: string[];
  readonly name!: string;
  readonly prevent_user_existence_errors?: string;
  readonly read_attributes?: string[];
  readonly refresh_token_validity?: number;
  readonly supported_identity_providers?: string[];
  readonly write_attributes?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoManagedUserPoolClientArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_managed_user_pool_client");
  }
}