import { TerraformConfig, TerraformResource } from "tfs";
export interface ForwardInboundCredentials {
  access_token?: boolean;
  id_token?: boolean;
  refresh_token?: boolean;
}
export interface Triggers {
  event_type: string;
  function_uri: string;
}
export interface BlockingFunctions {
  forward_inbound_credentials: ForwardInboundCredentials;
  triggers: Triggers;
}
export interface Permissions {
  disabled_user_deletion?: boolean;
  disabled_user_signup?: boolean;
}
export interface Client {
  permissions: Permissions;
}
export interface TotpProviderConfig {
  adjacent_intervals?: number;
}
export interface ProviderConfigs {
  totp_provider_config: TotpProviderConfig;
}
export interface Mfa {
  enabled_providers?: string[];
  provider_configs: ProviderConfigs;
}
export interface RequestLogging {
  enabled?: boolean;
}
export interface Monitoring {
  request_logging: RequestLogging;
}
export interface MultiTenant {
  allow_tenants?: boolean;
  default_tenant_location?: string;
}
export interface SignUpQuotaConfig {
  quota?: number;
  quota_duration?: string;
  start_time?: string;
}
export interface Quota {
  sign_up_quota_config: SignUpQuotaConfig;
}
export interface Anonymous {
  enabled: boolean;
}
export interface Email {
  enabled: boolean;
  password_required?: boolean;
}
export interface PhoneNumber {
  enabled: boolean;
  test_phone_numbers?: {
    [key: string]: string;
  };
}
export interface SignIn {
  allow_duplicate_emails?: boolean;
  anonymous: Anonymous;
  email: Email;
  phone_number: PhoneNumber;
}
export interface AllowByDefault {
  disallowed_regions?: string[];
}
export interface AllowlistOnly {
  allowed_regions?: string[];
}
export interface SmsRegionConfig {
  allow_by_default: AllowByDefault;
  allowlist_only: AllowlistOnly;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIdentityPlatformConfigArgs {
  autodelete_anonymous_users?: boolean;
  blocking_functions: BlockingFunctions;
  client: Client;
  mfa: Mfa;
  monitoring: Monitoring;
  multi_tenant: MultiTenant;
  quota: Quota;
  sign_in: SignIn;
  sms_region_config: SmsRegionConfig;
  timeouts: Timeouts;
}
export class google_identity_platform_config extends TerraformResource {
  readonly authorized_domains?: string[];
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformConfigArgs) {
    super(config, "resource", args, resourceName, "google_identity_platform_config");
  }
}