import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIdentityPlatformTenantDefaultSupportedIdpConfigArgs {
  client_id: string;
  client_secret: string;
  enabled?: boolean;
  idp_id: string;
  tenant: string;
  timeouts: Timeouts;
}
export class google_identity_platform_tenant_default_supported_idp_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigArgs) {
    super(config, "resource", args, resourceName, "google_identity_platform_tenant_default_supported_idp_config");
  }
}