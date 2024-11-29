import { TerraformConfig, TerraformResource } from "tfs";
export interface Settings {
  data_project_ids: string[];
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleHealthcareWorkspaceArgs {
  dataset: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  settings: Settings;
  timeouts: Timeouts;
}
export class google_healthcare_workspace extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareWorkspaceArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_workspace");
  }
}