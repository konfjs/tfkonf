import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleAccessContextManagerAccessLevelArgsBasicConditionsDevicePolicyOsConstraints {
  minimum_version?: string;
  os_type: string;
  require_verified_chrome_os?: boolean;
}
export interface GoogleAccessContextManagerAccessLevelArgsBasicConditionsDevicePolicy {
  allowed_device_management_levels?: string[];
  allowed_encryption_statuses?: string[];
  require_admin_approval?: boolean;
  require_corp_owned?: boolean;
  require_screen_lock?: boolean;
  os_constraints: GoogleAccessContextManagerAccessLevelArgsBasicConditionsDevicePolicyOsConstraints;
}
export interface GoogleAccessContextManagerAccessLevelArgsBasicConditionsVpcNetworkSourcesVpcSubnetwork {
  network: string;
  vpc_ip_subnetworks?: string[];
}
export interface GoogleAccessContextManagerAccessLevelArgsBasicConditionsVpcNetworkSources {
  vpc_subnetwork: GoogleAccessContextManagerAccessLevelArgsBasicConditionsVpcNetworkSourcesVpcSubnetwork;
}
export interface GoogleAccessContextManagerAccessLevelArgsBasicConditions {
  ip_subnetworks?: string[];
  members?: string[];
  negate?: boolean;
  regions?: string[];
  required_access_levels?: string[];
  device_policy: GoogleAccessContextManagerAccessLevelArgsBasicConditionsDevicePolicy;
  vpc_network_sources: GoogleAccessContextManagerAccessLevelArgsBasicConditionsVpcNetworkSources;
}
export interface GoogleAccessContextManagerAccessLevelArgsBasic {
  combining_function?: string;
  conditions: GoogleAccessContextManagerAccessLevelArgsBasicConditions;
}
export interface GoogleAccessContextManagerAccessLevelArgsCustomExpr {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleAccessContextManagerAccessLevelArgsCustom {
  expr: GoogleAccessContextManagerAccessLevelArgsCustomExpr;
}
export interface GoogleAccessContextManagerAccessLevelArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAccessContextManagerAccessLevelArgs {
  description?: string;
  name: string;
  parent: string;
  title: string;
  basic: GoogleAccessContextManagerAccessLevelArgsBasic;
  custom: GoogleAccessContextManagerAccessLevelArgsCustom;
  timeouts: GoogleAccessContextManagerAccessLevelArgsTimeouts;
}
export class google_access_context_manager_access_level extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessLevelArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_level");
  }
}