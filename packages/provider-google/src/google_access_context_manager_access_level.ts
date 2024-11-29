import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerAccessLevelArgsbasicconditionsDevicePolicyOsConstraints {
  minimum_version?: string;
  os_type: string;
  require_verified_chrome_os?: boolean;
}
export interface GoogleAccessContextManagerAccessLevelArgsbasicconditionsDevicePolicy {
  allowed_device_management_levels?: string[];
  allowed_encryption_statuses?: string[];
  require_admin_approval?: boolean;
  require_corp_owned?: boolean;
  require_screen_lock?: boolean;
  os_constraints: GoogleAccessContextManagerAccessLevelArgsbasicconditionsDevicePolicyOsConstraints;
}
export interface GoogleAccessContextManagerAccessLevelArgsbasicconditionsVpcNetworkSourcesVpcSubnetwork {
  network: string;
  vpc_ip_subnetworks?: string[];
}
export interface GoogleAccessContextManagerAccessLevelArgsbasicconditionsVpcNetworkSources {
  vpc_subnetwork: GoogleAccessContextManagerAccessLevelArgsbasicconditionsVpcNetworkSourcesVpcSubnetwork;
}
export interface GoogleAccessContextManagerAccessLevelArgsbasicconditions {
  ip_subnetworks?: string[];
  members?: string[];
  negate?: boolean;
  regions?: string[];
  required_access_levels?: string[];
  device_policy: GoogleAccessContextManagerAccessLevelArgsbasicconditionsDevicePolicy;
  vpc_network_sources: GoogleAccessContextManagerAccessLevelArgsbasicconditionsVpcNetworkSources;
}
export interface GoogleAccessContextManagerAccessLevelArgsbasic {
  combining_function?: string;
  conditions: GoogleAccessContextManagerAccessLevelArgsbasicconditions;
}
export interface GoogleAccessContextManagerAccessLevelArgscustomexpr {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleAccessContextManagerAccessLevelArgscustom {
  expr: GoogleAccessContextManagerAccessLevelArgscustomexpr;
}
export interface GoogleAccessContextManagerAccessLevelArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAccessContextManagerAccessLevelArgs {
  description?: string;
  name: string;
  parent: string;
  title: string;
  basic: GoogleAccessContextManagerAccessLevelArgsbasic;
  custom: GoogleAccessContextManagerAccessLevelArgscustom;
  timeouts: GoogleAccessContextManagerAccessLevelArgstimeouts;
}
export class google_access_context_manager_access_level extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessLevelArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_level");
  }
}