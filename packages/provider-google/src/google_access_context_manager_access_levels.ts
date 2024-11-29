import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasicconditionsDevicePolicyOsConstraints {
  minimum_version?: string;
  os_type: string;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasicconditionsDevicePolicy {
  allowed_device_management_levels?: string[];
  allowed_encryption_statuses?: string[];
  require_admin_approval?: boolean;
  require_corp_owned?: boolean;
  require_screen_lock?: boolean;
  os_constraints: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasicconditionsDevicePolicyOsConstraints;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasicconditionsVpcNetworkSourcesVpcSubnetwork {
  network: string;
  vpc_ip_subnetworks?: string[];
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasicconditionsVpcNetworkSources {
  vpc_subnetwork: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasicconditionsVpcNetworkSourcesVpcSubnetwork;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasicconditions {
  ip_subnetworks?: string[];
  members?: string[];
  negate?: boolean;
  regions?: string[];
  required_access_levels?: string[];
  device_policy: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasicconditionsDevicePolicy;
  vpc_network_sources: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasicconditionsVpcNetworkSources;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasic {
  combining_function?: string;
  conditions: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasicconditions;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelscustomexpr {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelscustom {
  expr: GoogleAccessContextManagerAccessLevelsArgsAccessLevelscustomexpr;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevels {
  description?: string;
  name: string;
  title: string;
  basic: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsbasic;
  custom: GoogleAccessContextManagerAccessLevelsArgsAccessLevelscustom;
}
export interface GoogleAccessContextManagerAccessLevelsArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAccessContextManagerAccessLevelsArgs {
  parent: string;
  access_levels: GoogleAccessContextManagerAccessLevelsArgsAccessLevels;
  timeouts: GoogleAccessContextManagerAccessLevelsArgstimeouts;
}
export class google_access_context_manager_access_levels extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessLevelsArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_levels");
  }
}