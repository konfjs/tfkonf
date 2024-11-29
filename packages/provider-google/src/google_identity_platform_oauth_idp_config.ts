import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIdentityPlatformOauthIdpConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIdentityPlatformOauthIdpConfigArgs {
  client_id: string;
  client_secret?: string;
  display_name?: string;
  enabled?: boolean;
  issuer: string;
  name: string;
  timeouts: GoogleIdentityPlatformOauthIdpConfigArgsTimeouts;
}
export class google_identity_platform_oauth_idp_config extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformOauthIdpConfigArgs) {
    super(config, "resource", args, resourceName, "google_identity_platform_oauth_idp_config");
  }
}