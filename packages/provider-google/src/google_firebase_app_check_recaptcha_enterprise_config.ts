import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirebaseAppCheckRecaptchaEnterpriseConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirebaseAppCheckRecaptchaEnterpriseConfigArgs {
  app_id: string;
  site_key: string;
  timeouts?: GoogleFirebaseAppCheckRecaptchaEnterpriseConfigArgsTimeouts;
}

export class google_firebase_app_check_recaptcha_enterprise_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly token_ttl?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckRecaptchaEnterpriseConfigArgs) {
    super(config, "resource", args, resourceName, "google_firebase_app_check_recaptcha_enterprise_config");
  }
}
