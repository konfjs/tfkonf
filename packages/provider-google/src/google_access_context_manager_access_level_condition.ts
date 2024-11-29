import { TerraformConfig, TerraformResource } from "tfs";
export interface OsConstraints {
  minimum_version?: string;
  os_type: string;
}
export interface DevicePolicy {
  allowed_device_management_levels?: string[];
  allowed_encryption_statuses?: string[];
  require_admin_approval?: boolean;
  require_corp_owned?: boolean;
  require_screen_lock?: boolean;
  os_constraints: OsConstraints;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface VpcSubnetwork {
  network: string;
  vpc_ip_subnetworks?: string[];
}
export interface VpcNetworkSources {
  vpc_subnetwork: VpcSubnetwork;
}
export interface GoogleAccessContextManagerAccessLevelConditionArgs {
  access_level: string;
  ip_subnetworks?: string[];
  members?: string[];
  negate?: boolean;
  regions?: string[];
  required_access_levels?: string[];
  device_policy: DevicePolicy;
  timeouts: Timeouts;
  vpc_network_sources: VpcNetworkSources;
}
export class google_access_context_manager_access_level_condition extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessLevelConditionArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_level_condition");
  }
}