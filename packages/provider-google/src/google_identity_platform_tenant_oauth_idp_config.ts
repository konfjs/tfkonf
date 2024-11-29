import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIdentityPlatformTenantOauthIdpConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIdentityPlatformTenantOauthIdpConfigArgs {
  client_id: string;
  client_secret?: string;
  display_name: string;
  enabled?: boolean;
  issuer: string;
  name: string;
  tenant: string;
  timeouts: GoogleIdentityPlatformTenantOauthIdpConfigArgsTimeouts;
}
export class google_identity_platform_tenant_oauth_idp_config extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformTenantOauthIdpConfigArgs) {
    super(config, "resource", args, resourceName, "google_identity_platform_tenant_oauth_idp_config");
  }
}