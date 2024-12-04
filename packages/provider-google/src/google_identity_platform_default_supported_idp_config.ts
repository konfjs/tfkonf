import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIdentityPlatformDefaultSupportedIdpConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIdentityPlatformDefaultSupportedIdpConfigArgs {
  client_id: string;
  client_secret: string;
  enabled?: boolean;
  idp_id: string;
  timeouts?: GoogleIdentityPlatformDefaultSupportedIdpConfigArgsTimeouts;
}

export class google_identity_platform_default_supported_idp_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformDefaultSupportedIdpConfigArgs) {
    super(config, "resource", args, resourceName, "google_identity_platform_default_supported_idp_config");
  }
}
