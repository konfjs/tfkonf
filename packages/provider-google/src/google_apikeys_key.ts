import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApikeysKeyArgsrestrictionsAndroidKeyRestrictionsAllowedApplications {
  package_name: string;
  sha1_fingerprint: string;
}
export interface GoogleApikeysKeyArgsrestrictionsAndroidKeyRestrictions {
  allowed_applications: GoogleApikeysKeyArgsrestrictionsAndroidKeyRestrictionsAllowedApplications;
}
export interface GoogleApikeysKeyArgsrestrictionsApiTargets {
  methods?: string[];
  service: string;
}
export interface GoogleApikeysKeyArgsrestrictionsBrowserKeyRestrictions {
  allowed_referrers: string[];
}
export interface GoogleApikeysKeyArgsrestrictionsIosKeyRestrictions {
  allowed_bundle_ids: string[];
}
export interface GoogleApikeysKeyArgsrestrictionsServerKeyRestrictions {
  allowed_ips: string[];
}
export interface GoogleApikeysKeyArgsrestrictions {
  android_key_restrictions: GoogleApikeysKeyArgsrestrictionsAndroidKeyRestrictions;
  api_targets: GoogleApikeysKeyArgsrestrictionsApiTargets;
  browser_key_restrictions: GoogleApikeysKeyArgsrestrictionsBrowserKeyRestrictions;
  ios_key_restrictions: GoogleApikeysKeyArgsrestrictionsIosKeyRestrictions;
  server_key_restrictions: GoogleApikeysKeyArgsrestrictionsServerKeyRestrictions;
}
export interface GoogleApikeysKeyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApikeysKeyArgs {
  display_name?: string;
  name: string;
  restrictions: GoogleApikeysKeyArgsrestrictions;
  timeouts: GoogleApikeysKeyArgstimeouts;
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