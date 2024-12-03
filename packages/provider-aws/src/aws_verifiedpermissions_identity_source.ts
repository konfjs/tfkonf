import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationCognitoUserPoolConfigurationGroupConfiguration {
  group_entity_type: string;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationCognitoUserPoolConfiguration {
  user_pool_arn: string;
  group_configuration: AwsVerifiedpermissionsIdentitySourceArgsConfigurationCognitoUserPoolConfigurationGroupConfiguration;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationGroupConfiguration {
  group_claim: string;
  group_entity_type: string;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly {
  audiences?: string[];
  principal_id_claim?: string;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly {
  client_ids?: string[];
  principal_id_claim?: string;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelection {
  access_token_only: AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly;
  identity_token_only: AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfiguration {
  entity_id_prefix?: string;
  issuer: string;
  group_configuration: AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationGroupConfiguration;
  token_selection: AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfigurationTokenSelection;
}
export interface AwsVerifiedpermissionsIdentitySourceArgsConfiguration {
  cognito_user_pool_configuration: AwsVerifiedpermissionsIdentitySourceArgsConfigurationCognitoUserPoolConfiguration;
  open_id_connect_configuration: AwsVerifiedpermissionsIdentitySourceArgsConfigurationOpenIdConnectConfiguration;
}
export interface AwsVerifiedpermissionsIdentitySourceArgs {
  policy_store_id: string;
  configuration: AwsVerifiedpermissionsIdentitySourceArgsConfiguration;
}
export class aws_verifiedpermissions_identity_source extends TerraformResource {
  readonly id!: string;
  readonly principal_entity_type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsIdentitySourceArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedpermissions_identity_source");
  }
}