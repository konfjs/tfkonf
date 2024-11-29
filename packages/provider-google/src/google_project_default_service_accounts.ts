import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleProjectDefaultServiceAccountsArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}
export interface GoogleProjectDefaultServiceAccountsArgs {
  action: string;
  project: string;
  restore_policy?: string;
  timeouts?: GoogleProjectDefaultServiceAccountsArgsTimeouts;
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