import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccSourceArgs {
  description?: string;
  display_name: string;
  organization: string;
  timeouts: Timeouts;
}
export class google_scc_source extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccSourceArgs) {
    super(config, "resource", args, resourceName, "google_scc_source");
  }
}