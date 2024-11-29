import { TerraformConfig, TerraformResource } from "tfs";
export interface AndroidSettings {
  allow_all_package_names?: boolean;
  allowed_package_names?: string[];
}
export interface IosSettings {
  allow_all_bundle_ids?: boolean;
  allowed_bundle_ids?: string[];
}
export interface TestingOptions {
  testing_score?: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface WafSettings {
  waf_feature: string;
  waf_service: string;
}
export interface WebSettings {
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
  android_settings: AndroidSettings;
  ios_settings: IosSettings;
  testing_options: TestingOptions;
  timeouts: Timeouts;
  waf_settings: WafSettings;
  web_settings: WebSettings;
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