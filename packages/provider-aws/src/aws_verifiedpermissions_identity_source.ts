import { TerraformConfig, TerraformResource } from "tfs";
export interface GroupConfiguration {
  group_entity_type: string;
}
export interface CognitoUserPoolConfiguration {
  user_pool_arn: string;
  group_configuration: GroupConfiguration;
}
export interface GroupConfiguration {
  group_claim: string;
  group_entity_type: string;
}
export interface AccessTokenOnly {
  audiences?: string[];
  principal_id_claim?: string;
}
export interface IdentityTokenOnly {
  client_ids?: string[];
  principal_id_claim?: string;
}
export interface TokenSelection {
  access_token_only: AccessTokenOnly;
  identity_token_only: IdentityTokenOnly;
}
export interface OpenIdConnectConfiguration {
  entity_id_prefix?: string;
  issuer: string;
  group_configuration: GroupConfiguration;
  token_selection: TokenSelection;
}
export interface Configuration {
  cognito_user_pool_configuration: CognitoUserPoolConfiguration;
  open_id_connect_configuration: OpenIdConnectConfiguration;
}
export interface AwsVerifiedpermissionsIdentitySourceArgs {
  policy_store_id: string;
  configuration: Configuration;
}
export class aws_verifiedpermissions_identity_source extends TerraformResource {
  readonly id!: string;
  readonly principal_entity_type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsIdentitySourceArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedpermissions_identity_source");
  }
}