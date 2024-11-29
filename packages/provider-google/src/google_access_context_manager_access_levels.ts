import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasicConditionsDevicePolicyOsConstraints {
  minimum_version?: string;
  os_type: string;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasicConditionsDevicePolicy {
  allowed_device_management_levels?: string[];
  allowed_encryption_statuses?: string[];
  require_admin_approval?: boolean;
  require_corp_owned?: boolean;
  require_screen_lock?: boolean;
  os_constraints: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasicConditionsDevicePolicyOsConstraints;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork {
  network: string;
  vpc_ip_subnetworks?: string[];
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasicConditionsVpcNetworkSources {
  vpc_subnetwork: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasicConditions {
  ip_subnetworks?: string[];
  members?: string[];
  negate?: boolean;
  regions?: string[];
  required_access_levels?: string[];
  device_policy: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasicConditionsDevicePolicy;
  vpc_network_sources: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasicConditionsVpcNetworkSources;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasic {
  combining_function?: string;
  conditions: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasicConditions;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsCustomExpr {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevelsCustom {
  expr: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsCustomExpr;
}
export interface GoogleAccessContextManagerAccessLevelsArgsAccessLevels {
  description?: string;
  name: string;
  title: string;
  basic: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsBasic;
  custom: GoogleAccessContextManagerAccessLevelsArgsAccessLevelsCustom;
}
export interface GoogleAccessContextManagerAccessLevelsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAccessContextManagerAccessLevelsArgs {
  parent: string;
  access_levels: GoogleAccessContextManagerAccessLevelsArgsAccessLevels;
  timeouts?: GoogleAccessContextManagerAccessLevelsArgsTimeouts;
}
export class google_access_context_manager_access_levels extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessLevelsArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_levels");
  }
}