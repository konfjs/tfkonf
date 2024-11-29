import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleRecaptchaEnterpriseKeyArgsAndroidSettings {
  allow_all_package_names?: boolean;
  allowed_package_names?: string[];
}
export interface GoogleRecaptchaEnterpriseKeyArgsIosSettings {
  allow_all_bundle_ids?: boolean;
  allowed_bundle_ids?: string[];
}
export interface GoogleRecaptchaEnterpriseKeyArgsTestingOptions {
  testing_score?: number;
}
export interface GoogleRecaptchaEnterpriseKeyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleRecaptchaEnterpriseKeyArgsWafSettings {
  waf_feature: string;
  waf_service: string;
}
export interface GoogleRecaptchaEnterpriseKeyArgsWebSettings {
  allow_all_domains?: boolean;
  allow_amp_traffic?: boolean;
  allowed_domains?: string[];
  integration_type: string;
}
export interface GoogleRecaptchaEnterpriseKeyArgs {
  display_name: string;
  labels?: {
    [key: string]: string;
  };
  android_settings: GoogleRecaptchaEnterpriseKeyArgsAndroidSettings;
  ios_settings: GoogleRecaptchaEnterpriseKeyArgsIosSettings;
  testing_options: GoogleRecaptchaEnterpriseKeyArgsTestingOptions;
  timeouts: GoogleRecaptchaEnterpriseKeyArgstimeouts;
  waf_settings: GoogleRecaptchaEnterpriseKeyArgsWafSettings;
  web_settings: GoogleRecaptchaEnterpriseKeyArgsWebSettings;
}
export class google_recaptcha_enterprise_key extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleRecaptchaEnterpriseKeyArgs) {
    super(config, "resource", args, resourceName, "google_recaptcha_enterprise_key");
  }
}