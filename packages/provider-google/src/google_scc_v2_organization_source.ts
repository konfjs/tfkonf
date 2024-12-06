import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2OrganizationSourceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccV2OrganizationSourceArgs {
  description?: string;
  display_name: string;
  organization: string;
  timeouts?: GoogleSccV2OrganizationSourceArgsTimeouts;
}

export class google_scc_v2_organization_source extends TerraformResource {
  readonly id?: string;
  readonly name!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2OrganizationSourceArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_organization_source");
  }
}
