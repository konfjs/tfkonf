import { TerraformConfig, TerraformResource } from "tfs";
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
export interface GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterinventories {
  os_short_name: string;
  os_version?: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsInstanceFilter {
  all?: boolean;
  exclusion_labels: GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterExclusionLabels;
  inclusion_labels: GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterInclusionLabels;
  inventories: GoogleOsConfigOsPolicyAssignmentArgsInstanceFilterinventories;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsInventoryFilters {
  os_short_name: string;
  os_version?: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecenforcefilegcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecenforcefileremote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecenforcefile {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecenforcefilegcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecenforcefileremote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecenforce {
  args?: string[];
  interpreter: string;
  output_file_path?: string;
  script?: string;
  file: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecenforcefile;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecvalidatefilegcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecvalidatefileremote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecvalidatefile {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecvalidatefilegcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecvalidatefileremote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecvalidate {
  args?: string[];
  interpreter: string;
  output_file_path?: string;
  script?: string;
  file: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecvalidatefile;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexec {
  enforce: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecenforce;
  validate: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexecvalidate;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesfilefilegcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesfilefileremote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesfilefile {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesfilefilegcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesfilefileremote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesfile {
  content?: string;
  path: string;
  state: string;
  file: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesfilefile;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgapt {
  name: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgdebsourcegcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgdebsourceremote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgdebsource {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgdebsourcegcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgdebsourceremote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgdeb {
  pull_deps?: boolean;
  source: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgdebsource;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkggooget {
  name: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgmsisourcegcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgmsisourceremote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgmsisource {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgmsisourcegcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgmsisourceremote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgmsi {
  properties?: string[];
  source: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgmsisource;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgrpmsourcegcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgrpmsourceremote {
  sha256_checksum?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgrpmsource {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgrpmsourcegcs;
  remote: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgrpmsourceremote;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgrpm {
  pull_deps?: boolean;
  source: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgrpmsource;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgyum {
  name: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgzypper {
  name: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkg {
  desired_state: string;
  apt: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgapt;
  deb: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgdeb;
  googet: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkggooget;
  msi: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgmsi;
  rpm: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgrpm;
  yum: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgyum;
  zypper: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkgzypper;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesrepositoryapt {
  archive_type: string;
  components: string[];
  distribution: string;
  gpg_key?: string;
  uri: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesrepositorygoo {
  name: string;
  url: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesrepositoryyum {
  base_url: string;
  display_name?: string;
  gpg_keys?: string[];
  id: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesrepositoryzypper {
  base_url: string;
  display_name?: string;
  gpg_keys?: string[];
  id: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesrepository {
  apt: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesrepositoryapt;
  goo: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesrepositorygoo;
  yum: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesrepositoryyum;
  zypper: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesrepositoryzypper;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresources {
  id: string;
  exec: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesexec;
  file: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesfile;
  pkg: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcespkg;
  repository: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresourcesrepository;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroups {
  inventory_filters: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsInventoryFilters;
  resources: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroupsresources;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsOsPolicies {
  allow_no_resource_group_match?: boolean;
  description?: string;
  id: string;
  mode: string;
  resource_groups: GoogleOsConfigOsPolicyAssignmentArgsOsPoliciesResourceGroups;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsrolloutDisruptionBudget {
  fixed?: number;
  percent?: number;
}
export interface GoogleOsConfigOsPolicyAssignmentArgsrollout {
  min_wait_duration: string;
  disruption_budget: GoogleOsConfigOsPolicyAssignmentArgsrolloutDisruptionBudget;
}
export interface GoogleOsConfigOsPolicyAssignmentArgstimeouts {
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
  rollout: GoogleOsConfigOsPolicyAssignmentArgsrollout;
  timeouts: GoogleOsConfigOsPolicyAssignmentArgstimeouts;
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