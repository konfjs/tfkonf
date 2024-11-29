import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleFirebaseAppCheckDebugTokenArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleFirebaseAppCheckDebugTokenArgs {
  app_id: string;
  display_name: string;
  token: string;
  timeouts: GoogleFirebaseAppCheckDebugTokenArgstimeouts;
}
export class google_firebase_app_check_debug_token extends TerraformResource {
  readonly debug_token_id!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckDebugTokenArgs) {
    super(config, "resource", args, resourceName, "google_firebase_app_check_debug_token");
  }
}