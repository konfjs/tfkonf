import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleProjectDefaultServiceAccountsArgstimeouts {
  create?: string;
  delete?: string;
  read?: string;
}
export interface GoogleProjectDefaultServiceAccountsArgs {
  action: string;
  project: string;
  restore_policy?: string;
  timeouts: GoogleProjectDefaultServiceAccountsArgstimeouts;
}
export class google_project_default_service_accounts extends TerraformResource {
  readonly id?: string;
  readonly service_accounts!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectDefaultServiceAccountsArgs) {
    super(config, "resource", args, resourceName, "google_project_default_service_accounts");
  }
}