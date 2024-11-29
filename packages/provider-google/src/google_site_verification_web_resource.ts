import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSiteVerificationWebResourceArgssite {
  identifier: string;
  type: string;
}
export interface GoogleSiteVerificationWebResourceArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleSiteVerificationWebResourceArgs {
  verification_method: string;
  site: GoogleSiteVerificationWebResourceArgssite;
  timeouts: GoogleSiteVerificationWebResourceArgstimeouts;
}
export class google_site_verification_web_resource extends TerraformResource {
  readonly id?: string;
  readonly owners!: string[];
  readonly web_resource_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSiteVerificationWebResourceArgs) {
    super(config, "resource", args, resourceName, "google_site_verification_web_resource");
  }
}