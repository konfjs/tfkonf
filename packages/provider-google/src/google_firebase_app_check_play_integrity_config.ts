import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirebaseAppCheckPlayIntegrityConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirebaseAppCheckPlayIntegrityConfigArgs {
  app_id: string;
  timeouts?: GoogleFirebaseAppCheckPlayIntegrityConfigArgsTimeouts;
}

export class google_firebase_app_check_play_integrity_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly token_ttl?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckPlayIntegrityConfigArgs) {
    super(config, "resource", args, resourceName, "google_firebase_app_check_play_integrity_config");
  }
}
