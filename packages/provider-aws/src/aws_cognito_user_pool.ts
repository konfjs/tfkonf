import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCognitoUserPoolArgsAccountRecoverySettingRecoveryMechanism {
  name: string;
  priority: number;
}
export interface AwsCognitoUserPoolArgsAccountRecoverySetting {
  recovery_mechanism: AwsCognitoUserPoolArgsAccountRecoverySettingRecoveryMechanism;
}
export interface AwsCognitoUserPoolArgsAdminCreateUserConfigInviteMessageTemplate {
  email_message?: string;
  email_subject?: string;
  sms_message?: string;
}
export interface AwsCognitoUserPoolArgsAdminCreateUserConfig {
  allow_admin_create_user_only?: boolean;
  invite_message_template: AwsCognitoUserPoolArgsAdminCreateUserConfigInviteMessageTemplate;
}
export interface AwsCognitoUserPoolArgsDeviceConfiguration {
  challenge_required_on_new_device?: boolean;
  device_only_remembered_on_user_prompt?: boolean;
}
export interface AwsCognitoUserPoolArgsEmailConfiguration {
  configuration_set?: string;
  email_sending_account?: string;
  from_email_address?: string;
  reply_to_email_address?: string;
  source_arn?: string;
}
export interface AwsCognitoUserPoolArgsLambdaConfigCustomEmailSender {
  lambda_arn: string;
  lambda_version: string;
}
export interface AwsCognitoUserPoolArgsLambdaConfigCustomSmsSender {
  lambda_arn: string;
  lambda_version: string;
}
export interface AwsCognitoUserPoolArgsLambdaConfigPreTokenGenerationConfig {
  lambda_arn: string;
  lambda_version: string;
}
export interface AwsCognitoUserPoolArgsLambdaConfig {
  create_auth_challenge?: string;
  custom_message?: string;
  define_auth_challenge?: string;
  kms_key_id?: string;
  post_authentication?: string;
  post_confirmation?: string;
  pre_authentication?: string;
  pre_sign_up?: string;
  user_migration?: string;
  verify_auth_challenge_response?: string;
  custom_email_sender: AwsCognitoUserPoolArgsLambdaConfigCustomEmailSender;
  custom_sms_sender: AwsCognitoUserPoolArgsLambdaConfigCustomSmsSender;
  pre_token_generation_config: AwsCognitoUserPoolArgsLambdaConfigPreTokenGenerationConfig;
}
export interface AwsCognitoUserPoolArgsPasswordPolicy {
  minimum_length?: number;
  password_history_size?: number;
  require_lowercase?: boolean;
  require_numbers?: boolean;
  require_symbols?: boolean;
  require_uppercase?: boolean;
}
export interface AwsCognitoUserPoolArgsSchemaNumberAttributeConstraints {
  max_value?: string;
  min_value?: string;
}
export interface AwsCognitoUserPoolArgsSchemaStringAttributeConstraints {
  max_length?: string;
  min_length?: string;
}
export interface AwsCognitoUserPoolArgsSchema {
  attribute_data_type: string;
  developer_only_attribute?: boolean;
  mutable?: boolean;
  name: string;
  required?: boolean;
  number_attribute_constraints: AwsCognitoUserPoolArgsSchemaNumberAttributeConstraints;
  string_attribute_constraints: AwsCognitoUserPoolArgsSchemaStringAttributeConstraints;
}
export interface AwsCognitoUserPoolArgsSmsConfiguration {
  external_id: string;
  sns_caller_arn: string;
}
export interface AwsCognitoUserPoolArgsSoftwareTokenMfaConfiguration {
  enabled: boolean;
}
export interface AwsCognitoUserPoolArgsUserAttributeUpdateSettings {
  attributes_require_verification_before_update: string[];
}
export interface AwsCognitoUserPoolArgsUserPoolAddOns {
  advanced_security_mode: string;
}
export interface AwsCognitoUserPoolArgsUsernameConfiguration {
  case_sensitive: boolean;
}
export interface AwsCognitoUserPoolArgsVerificationMessageTemplate {
  default_email_option?: string;
}
export interface AwsCognitoUserPoolArgs {
  alias_attributes?: string[];
  auto_verified_attributes?: string[];
  deletion_protection?: string;
  mfa_configuration?: string;
  name: string;
  sms_authentication_message?: string;
  tags?: {
    [key: string]: string;
  };
  username_attributes?: string[];
  account_recovery_setting: AwsCognitoUserPoolArgsAccountRecoverySetting;
  admin_create_user_config: AwsCognitoUserPoolArgsAdminCreateUserConfig;
  device_configuration: AwsCognitoUserPoolArgsDeviceConfiguration;
  email_configuration: AwsCognitoUserPoolArgsEmailConfiguration;
  lambda_config: AwsCognitoUserPoolArgsLambdaConfig;
  password_policy: AwsCognitoUserPoolArgsPasswordPolicy;
  schema: AwsCognitoUserPoolArgsSchema;
  sms_configuration: AwsCognitoUserPoolArgsSmsConfiguration;
  software_token_mfa_configuration: AwsCognitoUserPoolArgsSoftwareTokenMfaConfiguration;
  user_attribute_update_settings: AwsCognitoUserPoolArgsUserAttributeUpdateSettings;
  user_pool_add_ons: AwsCognitoUserPoolArgsUserPoolAddOns;
  username_configuration: AwsCognitoUserPoolArgsUsernameConfiguration;
  verification_message_template: AwsCognitoUserPoolArgsVerificationMessageTemplate;
}
export class aws_cognito_user_pool extends TerraformResource {
  readonly arn!: string;
  readonly creation_date!: string;
  readonly custom_domain!: string;
  readonly domain!: string;
  readonly email_verification_message?: string;
  readonly email_verification_subject?: string;
  readonly endpoint!: string;
  readonly estimated_number_of_users!: number;
  readonly id?: string;
  readonly last_modified_date!: string;
  readonly sms_verification_message?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoUserPoolArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_user_pool");
  }
}