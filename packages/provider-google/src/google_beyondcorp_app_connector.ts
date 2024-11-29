import { TerraformConfig, TerraformResource } from "tfs";
export interface ServiceAccount {
  email: string;
}
export interface PrincipalInfo {
  service_account: ServiceAccount;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBeyondcorpAppConnectorArgs {
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  region?: string;
  principal_info: PrincipalInfo;
  timeouts: Timeouts;
}
export class google_beyondcorp_app_connector extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBeyondcorpAppConnectorArgs) {
    super(config, "resource", args, resourceName, "google_beyondcorp_app_connector");
  }
}