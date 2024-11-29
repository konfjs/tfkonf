import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAccessContextManagerAccessLevelConditionArgsDevicePolicyOsConstraints {
  minimum_version?: string;
  os_type: string;
}
export interface GoogleAccessContextManagerAccessLevelConditionArgsDevicePolicy {
  allowed_device_management_levels?: string[];
  allowed_encryption_statuses?: string[];
  require_admin_approval?: boolean;
  require_corp_owned?: boolean;
  require_screen_lock?: boolean;
  os_constraints: GoogleAccessContextManagerAccessLevelConditionArgsDevicePolicyOsConstraints;
}
export interface GoogleAccessContextManagerAccessLevelConditionArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleAccessContextManagerAccessLevelConditionArgsVpcNetworkSourcesVpcSubnetwork {
  network: string;
  vpc_ip_subnetworks?: string[];
}
export interface GoogleAccessContextManagerAccessLevelConditionArgsVpcNetworkSources {
  vpc_subnetwork: GoogleAccessContextManagerAccessLevelConditionArgsVpcNetworkSourcesVpcSubnetwork;
}
export interface GoogleAccessContextManagerAccessLevelConditionArgs {
  access_level: string;
  ip_subnetworks?: string[];
  members?: string[];
  negate?: boolean;
  regions?: string[];
  required_access_levels?: string[];
  device_policy: GoogleAccessContextManagerAccessLevelConditionArgsDevicePolicy;
  timeouts: GoogleAccessContextManagerAccessLevelConditionArgstimeouts;
  vpc_network_sources: GoogleAccessContextManagerAccessLevelConditionArgsVpcNetworkSources;
}
export class google_access_context_manager_access_level_condition extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessLevelConditionArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_level_condition");
  }
}