import { TerraformConfig, TerraformResource } from "tfs";
export interface AllowedDomainsSettings {
  domains?: string[];
  enable?: boolean;
}
export interface CorsSettings {
  allow_http_options?: boolean;
}
export interface GcipSettings {
  login_page_uri?: string;
  tenant_ids?: string[];
}
export interface OauthSettings {
  login_hint?: string;
  programmatic_clients?: string[];
}
export interface ReauthSettings {
  max_age: string;
  method: string;
  policy_type: string;
}
export interface Oauth2 {
  client_id?: string;
  client_secret?: string;
}
export interface WorkforceIdentitySettings {
  workforce_pools?: string[];
  oauth2: Oauth2;
}
export interface AccessSettings {
  identity_sources?: string[];
  allowed_domains_settings: AllowedDomainsSettings;
  cors_settings: CorsSettings;
  gcip_settings: GcipSettings;
  oauth_settings: OauthSettings;
  reauth_settings: ReauthSettings;
  workforce_identity_settings: WorkforceIdentitySettings;
}
export interface AccessDeniedPageSettings {
  access_denied_page_uri?: string;
  generate_troubleshooting_uri?: boolean;
  remediation_token_generation_enabled?: boolean;
}
export interface AttributePropagationSettings {
  enable?: boolean;
  expression?: string;
  output_credentials?: string[];
}
export interface CsmSettings {
  rctoken_aud?: string;
}
export interface ApplicationSettings {
  cookie_domain?: string;
  access_denied_page_settings: AccessDeniedPageSettings;
  attribute_propagation_settings: AttributePropagationSettings;
  csm_settings: CsmSettings;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIapSettingsArgs {
  name: string;
  access_settings: AccessSettings;
  application_settings: ApplicationSettings;
  timeouts: Timeouts;
}
export class google_iap_settings extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapSettingsArgs) {
    super(config, "resource", args, resourceName, "google_iap_settings");
  }
}