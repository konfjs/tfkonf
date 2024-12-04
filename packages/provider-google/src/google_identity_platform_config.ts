import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIdentityPlatformConfigArgsBlockingFunctionsForwardInboundCredentials {
  access_token?: boolean;
  id_token?: boolean;
  refresh_token?: boolean;
}

export interface GoogleIdentityPlatformConfigArgsBlockingFunctionsTriggers {
  event_type: string;
  function_uri: string;
}

export interface GoogleIdentityPlatformConfigArgsBlockingFunctions {
  forward_inbound_credentials: GoogleIdentityPlatformConfigArgsBlockingFunctionsForwardInboundCredentials;
  triggers: GoogleIdentityPlatformConfigArgsBlockingFunctionsTriggers;
}

export interface GoogleIdentityPlatformConfigArgsClientPermissions {
  disabled_user_deletion?: boolean;
  disabled_user_signup?: boolean;
}

export interface GoogleIdentityPlatformConfigArgsClient {
  permissions: GoogleIdentityPlatformConfigArgsClientPermissions;
}

export interface GoogleIdentityPlatformConfigArgsMfaProviderConfigsTotpProviderConfig {
  adjacent_intervals?: number;
}

export interface GoogleIdentityPlatformConfigArgsMfaProviderConfigs {
  totp_provider_config: GoogleIdentityPlatformConfigArgsMfaProviderConfigsTotpProviderConfig;
}

export interface GoogleIdentityPlatformConfigArgsMfa {
  enabled_providers?: string[];
  provider_configs: GoogleIdentityPlatformConfigArgsMfaProviderConfigs;
}

export interface GoogleIdentityPlatformConfigArgsMonitoringRequestLogging {
  enabled?: boolean;
}

export interface GoogleIdentityPlatformConfigArgsMonitoring {
  request_logging: GoogleIdentityPlatformConfigArgsMonitoringRequestLogging;
}

export interface GoogleIdentityPlatformConfigArgsMultiTenant {
  allow_tenants?: boolean;
  default_tenant_location?: string;
}

export interface GoogleIdentityPlatformConfigArgsQuotaSignUpQuotaConfig {
  quota?: number;
  quota_duration?: string;
  start_time?: string;
}

export interface GoogleIdentityPlatformConfigArgsQuota {
  sign_up_quota_config: GoogleIdentityPlatformConfigArgsQuotaSignUpQuotaConfig;
}

export interface GoogleIdentityPlatformConfigArgsSignInAnonymous {
  enabled: boolean;
}

export interface GoogleIdentityPlatformConfigArgsSignInEmail {
  enabled: boolean;
  password_required?: boolean;
}

export interface GoogleIdentityPlatformConfigArgsSignInPhoneNumber {
  enabled: boolean;
  test_phone_numbers?: { [key: string]: string };
}

export interface GoogleIdentityPlatformConfigArgsSignIn {
  allow_duplicate_emails?: boolean;
  anonymous: GoogleIdentityPlatformConfigArgsSignInAnonymous;
  email: GoogleIdentityPlatformConfigArgsSignInEmail;
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

export interface GoogleIdentityPlatformConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIdentityPlatformConfigArgs {
  autodelete_anonymous_users?: boolean;
  blocking_functions: GoogleIdentityPlatformConfigArgsBlockingFunctions;
  client: GoogleIdentityPlatformConfigArgsClient;
  mfa: GoogleIdentityPlatformConfigArgsMfa;
  monitoring: GoogleIdentityPlatformConfigArgsMonitoring;
  multi_tenant: GoogleIdentityPlatformConfigArgsMultiTenant;
  quota: GoogleIdentityPlatformConfigArgsQuota;
  sign_in: GoogleIdentityPlatformConfigArgsSignIn;
  sms_region_config: GoogleIdentityPlatformConfigArgsSmsRegionConfig;
  timeouts?: GoogleIdentityPlatformConfigArgsTimeouts;
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
