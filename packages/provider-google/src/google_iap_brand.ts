import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleIapBrandArgs {
  application_title: string;
  support_email: string;
  timeouts: Timeouts;
}
export class google_iap_brand extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly org_internal_only!: boolean;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapBrandArgs) {
    super(config, "resource", args, resourceName, "google_iap_brand");
  }
}