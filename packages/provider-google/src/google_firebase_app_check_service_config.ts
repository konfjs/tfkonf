import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirebaseAppCheckServiceConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirebaseAppCheckServiceConfigArgs {
  enforcement_mode?: string;
  service_id: string;
  timeouts?: GoogleFirebaseAppCheckServiceConfigArgsTimeouts;
}

export class google_firebase_app_check_service_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckServiceConfigArgs) {
    super(config, "resource", args, resourceName, "google_firebase_app_check_service_config");
  }
}
