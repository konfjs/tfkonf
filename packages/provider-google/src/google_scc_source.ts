import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleSccSourceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccSourceArgs {
  description?: string;
  display_name: string;
  organization: string;
  timeouts: GoogleSccSourceArgsTimeouts;
}
export class google_scc_source extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccSourceArgs) {
    super(config, "resource", args, resourceName, "google_scc_source");
  }
}