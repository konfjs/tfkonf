import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleFirebaseAppCheckRecaptchaV3ConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleFirebaseAppCheckRecaptchaV3ConfigArgs {
  app_id: string;
  site_secret: string;
  timeouts: GoogleFirebaseAppCheckRecaptchaV3ConfigArgsTimeouts;
}
export class google_firebase_app_check_recaptcha_v3_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly site_secret_set!: boolean;
  readonly token_ttl?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckRecaptchaV3ConfigArgs) {
    super(config, "resource", args, resourceName, "google_firebase_app_check_recaptcha_v3_config");
  }
}