import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleLoggingFolderExclusionArgs {
  description?: string;
  disabled?: boolean;
  filter: string;
  folder: string;
  name: string;
}
export class google_logging_folder_exclusion extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingFolderExclusionArgs) {
    super(config, "resource", args, resourceName, "google_logging_folder_exclusion");
  }
}