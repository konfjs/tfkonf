import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleFirebaseAppCheckDebugTokenArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleFirebaseAppCheckDebugTokenArgs {
  app_id: string;
  display_name: string;
  token: string;
  timeouts: GoogleFirebaseAppCheckDebugTokenArgsTimeouts;
}
export class google_firebase_app_check_debug_token extends TerraformResource {
  readonly debug_token_id!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckDebugTokenArgs) {
    super(config, "resource", args, resourceName, "google_firebase_app_check_debug_token");
  }
}