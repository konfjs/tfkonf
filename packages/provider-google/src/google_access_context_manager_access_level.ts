import { TerraformConfig, TerraformResource } from "tfs";
export interface OsConstraints {
  minimum_version?: string;
  os_type: string;
  require_verified_chrome_os?: boolean;
}
export interface DevicePolicy {
  allowed_device_management_levels?: string[];
  allowed_encryption_statuses?: string[];
  require_admin_approval?: boolean;
  require_corp_owned?: boolean;
  require_screen_lock?: boolean;
  os_constraints: OsConstraints;
}
export interface VpcSubnetwork {
  network: string;
  vpc_ip_subnetworks?: string[];
}
export interface VpcNetworkSources {
  vpc_subnetwork: VpcSubnetwork;
}
export interface Conditions {
  ip_subnetworks?: string[];
  members?: string[];
  negate?: boolean;
  regions?: string[];
  required_access_levels?: string[];
  device_policy: DevicePolicy;
  vpc_network_sources: VpcNetworkSources;
}
export interface Basic {
  combining_function?: string;
  conditions: Conditions;
}
export interface Expr {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}
export interface Custom {
  expr: Expr;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAccessContextManagerAccessLevelArgs {
  description?: string;
  name: string;
  parent: string;
  title: string;
  basic: Basic;
  custom: Custom;
  timeouts: Timeouts;
}
export class google_access_context_manager_access_level extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerAccessLevelArgs) {
    super(config, "resource", args, resourceName, "google_access_context_manager_access_level");
  }
}