import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSccV2OrganizationSourceArgs {
  description?: string;
  display_name: string;
  organization: string;
  timeouts: Timeouts;
}
export class google_scc_v2_organization_source extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2OrganizationSourceArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_organization_source");
  }
}