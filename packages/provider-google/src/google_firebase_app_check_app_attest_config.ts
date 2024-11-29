import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleFirebaseAppCheckAppAttestConfigArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleFirebaseAppCheckAppAttestConfigArgs {
  app_id: string;
  timeouts: GoogleFirebaseAppCheckAppAttestConfigArgstimeouts;
}
export class google_firebase_app_check_app_attest_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly token_ttl?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckAppAttestConfigArgs) {
    super(config, "resource", args, resourceName, "google_firebase_app_check_app_attest_config");
  }
}