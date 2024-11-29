import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleFirebaseAppCheckServiceConfigArgs {
  enforcement_mode?: string;
  service_id: string;
  timeouts: Timeouts;
}
export class google_firebase_app_check_service_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckServiceConfigArgs) {
    super(config, "resource", args, resourceName, "google_firebase_app_check_service_config");
  }
}