import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIdentityPlatformTenantArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIdentityPlatformTenantArgs {
  allow_password_signup?: boolean;
  disable_auth?: boolean;
  display_name: string;
  enable_email_link_signin?: boolean;
  timeouts?: GoogleIdentityPlatformTenantArgsTimeouts;
}

export class google_identity_platform_tenant extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformTenantArgs) {
    super(config, "resource", args, resourceName, "google_identity_platform_tenant");
  }
}
