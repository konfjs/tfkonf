import { TerraformConfig, TerraformResource } from "tfs";
export interface IdpCertificates {
  x509_certificate?: string;
}
export interface IdpConfig {
  idp_entity_id: string;
  sign_request?: boolean;
  sso_url: string;
  idp_certificates: IdpCertificates;
}
export interface SpConfig {
  callback_uri: string;
  sp_entity_id: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIdentityPlatformTenantInboundSamlConfigArgs {
  display_name: string;
  enabled?: boolean;
  name: string;
  tenant: string;
  idp_config: IdpConfig;
  sp_config: SpConfig;
  timeouts: Timeouts;
}
export class google_identity_platform_tenant_inbound_saml_config extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformTenantInboundSamlConfigArgs) {
    super(config, "resource", args, resourceName, "google_identity_platform_tenant_inbound_saml_config");
  }
}