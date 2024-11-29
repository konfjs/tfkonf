import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVerifiedpermissionsIdentitySourceArgsconfigurationCognitoUserPoolConfigurationGroupConfiguration {
  group_entity_type: string;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsconfigurationCognitoUserPoolConfiguration {
  user_pool_arn: string;
  group_configuration: AwsVerifiedpermissionsIdentitySourceArgsconfigurationCognitoUserPoolConfigurationGroupConfiguration;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsconfigurationOpenIdConnectConfigurationGroupConfiguration {
  group_claim: string;
  group_entity_type: string;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsconfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly {
  audiences?: string[];
  principal_id_claim?: string;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsconfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly {
  client_ids?: string[];
  principal_id_claim?: string;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsconfigurationOpenIdConnectConfigurationTokenSelection {
  access_token_only: AwsVerifiedpermissionsIdentitySourceArgsconfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly;
  identity_token_only: AwsVerifiedpermissionsIdentitySourceArgsconfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsconfigurationOpenIdConnectConfiguration {
  entity_id_prefix?: string;
  issuer: string;
  group_configuration: AwsVerifiedpermissionsIdentitySourceArgsconfigurationOpenIdConnectConfigurationGroupConfiguration;
  token_selection: AwsVerifiedpermissionsIdentitySourceArgsconfigurationOpenIdConnectConfigurationTokenSelection;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsconfiguration {
  cognito_user_pool_configuration: AwsVerifiedpermissionsIdentitySourceArgsconfigurationCognitoUserPoolConfiguration;
  open_id_connect_configuration: AwsVerifiedpermissionsIdentitySourceArgsconfigurationOpenIdConnectConfiguration;
}
export interface AwsVerifiedpermissionsIdentitySourceArgs {
  policy_store_id: string;
  configuration: AwsVerifiedpermissionsIdentitySourceArgsconfiguration;
}
export class aws_verifiedpermissions_identity_source extends TerraformResource {
  readonly id!: string;
  readonly principal_entity_type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsIdentitySourceArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedpermissions_identity_source");
  }
}