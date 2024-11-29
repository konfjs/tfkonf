import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterExclusionLabels {
  labels?: {
    [key: string]: string;
  };
}
export interface GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterInclusionLabels {
  labels?: {
    [key: string]: string;
  };
}
export interface GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterInventories {
  os_short_name: string;
  os_version?: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsInstanceFilter {
  all?: boolean;
  exclusion_labels: GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterExclusionLabels;
  inclusion_labels: GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterInclusionLabels;
  inventories: GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterInventories;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsInventoryFilters {
  os_short_name: string;
  os_version?: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFileGcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFileRemote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFile {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFileGcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFileRemote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforce {
  args?: string[];
  interpreter: string;
  output_file_path?: string;
  script?: string;
  file: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforceFile;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFileGcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFileRemote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFile {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFileGcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFileRemote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidate {
  args?: string[];
  interpreter: string;
  output_file_path?: string;
  script?: string;
  file: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidateFile;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExec {
  enforce: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecEnforce;
  validate: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExecValidate;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFileGcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFileRemote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFile {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFileGcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFileRemote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFile {
  content?: string;
  path: string;
  state: string;
  file: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFileFile;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgApt {
  name: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSourceGcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSourceRemote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSource {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSourceGcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSourceRemote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDeb {
  pull_deps?: boolean;
  source: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDebSource;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgGooget {
  name: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSource {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsi {
  properties?: string[];
  source: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsiSource;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSource {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpm {
  pull_deps?: boolean;
  source: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpmSource;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgYum {
  name: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgZypper {
  name: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkg {
  desired_state: string;
  apt: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgApt;
  deb: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgDeb;
  googet: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgGooget;
  msi: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgMsi;
  rpm: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgRpm;
  yum: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgYum;
  zypper: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkgZypper;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryApt {
  archive_type: string;
  components: string[];
  distribution: string;
  gpg_key?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryGoo {
  name: string;
  url: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryYum {
  base_url: string;
  display_name?: string;
  gpg_keys?: string[];
  id: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryZypper {
  base_url: string;
  display_name?: string;
  gpg_keys?: string[];
  id: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepository {
  apt: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryApt;
  goo: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryGoo;
  yum: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryYum;
  zypper: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepositoryZypper;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResources {
  id: string;
  exec: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesExec;
  file: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesFile;
  pkg: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesPkg;
  repository: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResourcesRepository;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroups {
  inventory_filters: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsInventoryFilters;
  resources: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsResources;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPolicies {
  allow_no_resource_group_match?: boolean;
  description?: string;
  id: string;
  mode: string;
  resource_groups: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroups;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsRolloutDisruptionBudget {
  fixed?: number;
  percent?: number;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsRollout {
  min_wait_duration: string;
  disruption_budget: GoogleOsConfigOsPolicyAssignmentArgsRolloutDisruptionBudget;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgs {
  description?: string;
  location: string;
  name: string;
  skip_await_rollout?: boolean;
  instance_filter: GoogleOsConfigOsPolicyAssignmentArgsInstanceFilter;
  os_policies: GoogleOsConfigOsPolicyAssignmentArgsOsPolicies;
  rollout: GoogleOsConfigOsPolicyAssignmentArgsRollout;
  timeouts: GoogleOsConfigOsPolicyAssignmentArgsTimeouts;
}
export class google_os_config_os_policy_assignment extends TerraformResource {
  readonly baseline!: boolean;
  readonly deleted!: boolean;
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly revision_create_time!: string;
  readonly revision_id!: string;
  readonly rollout_state!: string;
  readonly uid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOsConfigOsPolicyAssignmentArgs) {
    super(config, "resource", args, resourceName, "google_os_config_os_policy_assignment");
  }
}