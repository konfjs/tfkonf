import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingProjectExclusionArgs {
  description?: string;
  disabled?: boolean;
  filter: string;
  name: string;
}

export class google_logging_project_exclusion extends TerraformResource {
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingProjectExclusionArgs) {
    super(config, "resource", args, resourceName, "google_logging_project_exclusion");
  }
}
