import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleIdentityPlatformInboundSamlConfigArgsIdpConfigIdpCertificates {
  x509_certificate?: string;
}
export interface GoogleIdentityPlatformInboundSamlConfigArgsIdpConfig {
  idp_entity_id: string;
  sign_request?: boolean;
  sso_url: string;
  idp_certificates: GoogleIdentityPlatformInboundSamlConfigArgsIdpConfigIdpCertificates;
}
export interface GoogleIdentityPlatformInboundSamlConfigArgsSpConfig {
  callback_uri?: string;
  sp_entity_id?: string;
}
export interface GoogleIdentityPlatformInboundSamlConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIdentityPlatformInboundSamlConfigArgs {
  display_name: string;
  enabled?: boolean;
  name: string;
  idp_config: GoogleIdentityPlatformInboundSamlConfigArgsIdpConfig;
  sp_config: GoogleIdentityPlatformInboundSamlConfigArgsSpConfig;
  timeouts?: GoogleIdentityPlatformInboundSamlConfigArgsTimeouts;
}
export class google_identity_platform_inbound_saml_config extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformInboundSamlConfigArgs) {
    super(config, "resource", args, resourceName, "google_identity_platform_inbound_saml_config");
  }
}