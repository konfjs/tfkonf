import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingOrganizationExclusionArgs {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
  org_id: string;
}

export class google_logging_organization_exclusion extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingOrganizationExclusionArgs) {
    super(config, "resource", args, resourceName, "google_logging_organization_exclusion");
  }
}
