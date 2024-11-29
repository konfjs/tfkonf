import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIdentityPlatformConfigArgsBlockingFunctionsForwardInboundCredentials {
  access_token?: boolean;
  id_token?: boolean;
  refresh_token?: boolean;
}
export interface GoogleIdentityPlatformConfigArgsBlockingFunctionstriggers {
  event_type: string;
  function_uri: string;
}
export interface GoogleIdentityPlatformConfigArgsBlockingFunctions {
  forward_inbound_credentials: GoogleIdentityPlatformConfigArgsBlockingFunctionsForwardInboundCredentials;
  triggers: GoogleIdentityPlatformConfigArgsBlockingFunctionstriggers;
}
export interface GoogleIdentityPlatformConfigArgsclientpermissions {
  disabled_user_deletion?: boolean;
  disabled_user_signup?: boolean;
}
export interface GoogleIdentityPlatformConfigArgsclient {
  permissions: GoogleIdentityPlatformConfigArgsclientpermissions;
}
export interface GoogleIdentityPlatformConfigArgsmfaProviderConfigsTotpProviderConfig {
  adjacent_intervals?: number;
}
export interface GoogleIdentityPlatformConfigArgsmfaProviderConfigs {
  totp_provider_config: GoogleIdentityPlatformConfigArgsmfaProviderConfigsTotpProviderConfig;
}
export interface GoogleIdentityPlatformConfigArgsmfa {
  enabled_providers?: string[];
  provider_configs: GoogleIdentityPlatformConfigArgsmfaProviderConfigs;
}
export interface GoogleIdentityPlatformConfigArgsmonitoringRequestLogging {
  enabled?: boolean;
}
export interface GoogleIdentityPlatformConfigArgsmonitoring {
  request_logging: GoogleIdentityPlatformConfigArgsmonitoringRequestLogging;
}
export interface GoogleIdentityPlatformConfigArgsMultiTenant {
  allow_tenants?: boolean;
  default_tenant_location?: string;
}
export interface GoogleIdentityPlatformConfigArgsquotaSignUpQuotaConfig {
  quota?: number;
  quota_duration?: string;
  start_time?: string;
}
export interface GoogleIdentityPlatformConfigArgsquota {
  sign_up_quota_config: GoogleIdentityPlatformConfigArgsquotaSignUpQuotaConfig;
}
export interface GoogleIdentityPlatformConfigArgsSignInanonymous {
  enabled: boolean;
}
export interface GoogleIdentityPlatformConfigArgsSignInemail {
  enabled: boolean;
  password_required?: boolean;
}
export interface GoogleIdentityPlatformConfigArgsSignInPhoneNumber {
  enabled: boolean;
  test_phone_numbers?: {
    [key: string]: string;
  };
}
export interface GoogleIdentityPlatformConfigArgsSignIn {
  allow_duplicate_emails?: boolean;
  anonymous: GoogleIdentityPlatformConfigArgsSignInanonymous;
  email: GoogleIdentityPlatformConfigArgsSignInemail;
  phone_number: GoogleIdentityPlatformConfigArgsSignInPhoneNumber;
}
export interface GoogleIdentityPlatformConfigArgsSmsRegionConfigAllowByDefault {
  disallowed_regions?: string[];
}
export interface GoogleIdentityPlatformConfigArgsSmsRegionConfigAllowlistOnly {
  allowed_regions?: string[];
}
export interface GoogleIdentityPlatformConfigArgsSmsRegionConfig {
  allow_by_default: GoogleIdentityPlatformConfigArgsSmsRegionConfigAllowByDefault;
  allowlist_only: GoogleIdentityPlatformConfigArgsSmsRegionConfigAllowlistOnly;
}
export interface GoogleIdentityPlatformConfigArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIdentityPlatformConfigArgs {
  autodelete_anonymous_users?: boolean;
  blocking_functions: GoogleIdentityPlatformConfigArgsBlockingFunctions;
  client: GoogleIdentityPlatformConfigArgsclient;
  mfa: GoogleIdentityPlatformConfigArgsmfa;
  monitoring: GoogleIdentityPlatformConfigArgsmonitoring;
  multi_tenant: GoogleIdentityPlatformConfigArgsMultiTenant;
  quota: GoogleIdentityPlatformConfigArgsquota;
  sign_in: GoogleIdentityPlatformConfigArgsSignIn;
  sms_region_config: GoogleIdentityPlatformConfigArgsSmsRegionConfig;
  timeouts: GoogleIdentityPlatformConfigArgstimeouts;
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