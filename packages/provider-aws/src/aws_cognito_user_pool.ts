import { TerraformConfig, TerraformResource } from "tfs";
export interface RecoveryMechanism {
  name: string;
  priority: number;
}
export interface AccountRecoverySetting {
  recovery_mechanism: RecoveryMechanism;
}
export interface InviteMessageTemplate {
  email_message?: string;
  email_subject?: string;
  sms_message?: string;
}
export interface AdminCreateUserConfig {
  allow_admin_create_user_only?: boolean;
  invite_message_template: InviteMessageTemplate;
}
export interface DeviceConfiguration {
  challenge_required_on_new_device?: boolean;
  device_only_remembered_on_user_prompt?: boolean;
}
export interface EmailConfiguration {
  configuration_set?: string;
  email_sending_account?: string;
  from_email_address?: string;
  reply_to_email_address?: string;
  source_arn?: string;
}
export interface CustomEmailSender {
  lambda_arn: string;
  lambda_version: string;
}
export interface CustomSmsSender {
  lambda_arn: string;
  lambda_version: string;
}
export interface PreTokenGenerationConfig {
  lambda_arn: string;
  lambda_version: string;
}
export interface LambdaConfig {
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
  custom_email_sender: CustomEmailSender;
  custom_sms_sender: CustomSmsSender;
  pre_token_generation_config: PreTokenGenerationConfig;
}
export interface PasswordPolicy {
  minimum_length?: number;
  password_history_size?: number;
  require_lowercase?: boolean;
  require_numbers?: boolean;
  require_symbols?: boolean;
  require_uppercase?: boolean;
}
export interface NumberAttributeConstraints {
  max_value?: string;
  min_value?: string;
}
export interface StringAttributeConstraints {
  max_length?: string;
  min_length?: string;
}
export interface Schema {
  attribute_data_type: string;
  developer_only_attribute?: boolean;
  mutable?: boolean;
  name: string;
  required?: boolean;
  number_attribute_constraints: NumberAttributeConstraints;
  string_attribute_constraints: StringAttributeConstraints;
}
export interface SmsConfiguration {
  external_id: string;
  sns_caller_arn: string;
}
export interface SoftwareTokenMfaConfiguration {
  enabled: boolean;
}
export interface UserAttributeUpdateSettings {
  attributes_require_verification_before_update: string[];
}
export interface UserPoolAddOns {
  advanced_security_mode: string;
}
export interface UsernameConfiguration {
  case_sensitive: boolean;
}
export interface VerificationMessageTemplate {
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
  account_recovery_setting: AccountRecoverySetting;
  admin_create_user_config: AdminCreateUserConfig;
  device_configuration: DeviceConfiguration;
  email_configuration: EmailConfiguration;
  lambda_config: LambdaConfig;
  password_policy: PasswordPolicy;
  schema: Schema;
  sms_configuration: SmsConfiguration;
  software_token_mfa_configuration: SoftwareTokenMfaConfiguration;
  user_attribute_update_settings: UserAttributeUpdateSettings;
  user_pool_add_ons: UserPoolAddOns;
  username_configuration: UsernameConfiguration;
  verification_message_template: VerificationMessageTemplate;
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