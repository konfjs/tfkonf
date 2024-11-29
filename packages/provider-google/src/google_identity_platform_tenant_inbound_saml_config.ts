import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIdentityPlatformTenantInboundSamlConfigArgsIdpConfigIdpCertificates {
  x509_certificate?: string;
}
export interface GoogleIdentityPlatformTenantInboundSamlConfigArgsIdpConfig {
  idp_entity_id: string;
  sign_request?: boolean;
  sso_url: string;
  idp_certificates: GoogleIdentityPlatformTenantInboundSamlConfigArgsIdpConfigIdpCertificates;
}
export interface GoogleIdentityPlatformTenantInboundSamlConfigArgsSpConfig {
  callback_uri: string;
  sp_entity_id: string;
}
export interface GoogleIdentityPlatformTenantInboundSamlConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIdentityPlatformTenantInboundSamlConfigArgs {
  display_name: string;
  enabled?: boolean;
  name: string;
  tenant: string;
  idp_config: GoogleIdentityPlatformTenantInboundSamlConfigArgsIdpConfig;
  sp_config: GoogleIdentityPlatformTenantInboundSamlConfigArgsSpConfig;
  timeouts: GoogleIdentityPlatformTenantInboundSamlConfigArgsTimeouts;
}
export class google_identity_platform_tenant_inbound_saml_config extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformTenantInboundSamlConfigArgs) {
    super(config, "resource", args, resourceName, "google_identity_platform_tenant_inbound_saml_config");
  }
}