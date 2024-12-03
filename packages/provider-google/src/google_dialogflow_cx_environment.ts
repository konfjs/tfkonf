import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDialogflowCxEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxEnvironmentArgsVersionConfigs {
  version: string;
}
export interface GoogleDialogflowCxEnvironmentArgs {
  description?: string;
  display_name: string;
  parent?: string;
  timeouts?: GoogleDialogflowCxEnvironmentArgsTimeouts;
  version_configs: GoogleDialogflowCxEnvironmentArgsVersionConfigs;
}
export class google_dialogflow_cx_environment extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxEnvironmentArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_environment");
  }
}