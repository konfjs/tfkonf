import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBillingProjectInfoArgs {
  billing_account: string;
  timeouts: Timeouts;
}
export class google_billing_project_info extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBillingProjectInfoArgs) {
    super(config, "resource", args, resourceName, "google_billing_project_info");
  }
}