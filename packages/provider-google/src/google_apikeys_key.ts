import { TerraformConfig, TerraformResource } from "tfs";
export interface AllowedApplications {
  package_name: string;
  sha1_fingerprint: string;
}
export interface AndroidKeyRestrictions {
  allowed_applications: AllowedApplications;
}
export interface ApiTargets {
  methods?: string[];
  service: string;
}
export interface BrowserKeyRestrictions {
  allowed_referrers: string[];
}
export interface IosKeyRestrictions {
  allowed_bundle_ids: string[];
}
export interface ServerKeyRestrictions {
  allowed_ips: string[];
}
export interface Restrictions {
  android_key_restrictions: AndroidKeyRestrictions;
  api_targets: ApiTargets;
  browser_key_restrictions: BrowserKeyRestrictions;
  ios_key_restrictions: IosKeyRestrictions;
  server_key_restrictions: ServerKeyRestrictions;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApikeysKeyArgs {
  display_name?: string;
  name: string;
  restrictions: Restrictions;
  timeouts: Timeouts;
}
export class google_apikeys_key extends TerraformResource {
  readonly id?: string;
  readonly key_string!: string;
  readonly project?: string;
  readonly uid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApikeysKeyArgs) {
    super(config, "resource", args, resourceName, "google_apikeys_key");
  }
}