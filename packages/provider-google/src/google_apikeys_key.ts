import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleApikeysKeyArgsRestrictionsAndroidKeyRestrictionsAllowedApplications {
  package_name: string;
  sha1_fingerprint: string;
}
export interface GoogleApikeysKeyArgsRestrictionsAndroidKeyRestrictions {
  allowed_applications: GoogleApikeysKeyArgsRestrictionsAndroidKeyRestrictionsAllowedApplications;
}
export interface GoogleApikeysKeyArgsRestrictionsApiTargets {
  methods?: string[];
  service: string;
}
export interface GoogleApikeysKeyArgsRestrictionsBrowserKeyRestrictions {
  allowed_referrers: string[];
}
export interface GoogleApikeysKeyArgsRestrictionsIosKeyRestrictions {
  allowed_bundle_ids: string[];
}
export interface GoogleApikeysKeyArgsRestrictionsServerKeyRestrictions {
  allowed_ips: string[];
}
export interface GoogleApikeysKeyArgsRestrictions {
  android_key_restrictions: GoogleApikeysKeyArgsRestrictionsAndroidKeyRestrictions;
  api_targets: GoogleApikeysKeyArgsRestrictionsApiTargets;
  browser_key_restrictions: GoogleApikeysKeyArgsRestrictionsBrowserKeyRestrictions;
  ios_key_restrictions: GoogleApikeysKeyArgsRestrictionsIosKeyRestrictions;
  server_key_restrictions: GoogleApikeysKeyArgsRestrictionsServerKeyRestrictions;
}
export interface GoogleApikeysKeyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApikeysKeyArgs {
  display_name?: string;
  name: string;
  restrictions: GoogleApikeysKeyArgsRestrictions;
  timeouts?: GoogleApikeysKeyArgsTimeouts;
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