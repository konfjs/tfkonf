import { TerraformConfig, TerraformResource } from "tfs";
export interface ExclusionLabels {
  labels?: {
    [key: string]: string;
  };
}
export interface InclusionLabels {
  labels?: {
    [key: string]: string;
  };
}
export interface Inventories {
  os_short_name: string;
  os_version?: string;
}
export interface InstanceFilter {
  all?: boolean;
  exclusion_labels: ExclusionLabels;
  inclusion_labels: InclusionLabels;
  inventories: Inventories;
}
export interface InventoryFilters {
  os_short_name: string;
  os_version?: string;
}
export interface Gcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface Remote {
  sha256_checksum?: string;
  uri: string;
}
export interface File {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: Gcs;
  remote: Remote;
}
export interface Enforce {
  args?: string[];
  interpreter: string;
  output_file_path?: string;
  script?: string;
  file: File;
}
export interface Gcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface Remote {
  sha256_checksum?: string;
  uri: string;
}
export interface File {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: Gcs;
  remote: Remote;
}
export interface Validate {
  args?: string[];
  interpreter: string;
  output_file_path?: string;
  script?: string;
  file: File;
}
export interface Exec {
  enforce: Enforce;
  validate: Validate;
}
export interface Gcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface Remote {
  sha256_checksum?: string;
  uri: string;
}
export interface File {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: Gcs;
  remote: Remote;
}
export interface File {
  content?: string;
  path: string;
  state: string;
  file: File;
}
export interface Apt {
  name: string;
}
export interface Gcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface Remote {
  sha256_checksum?: string;
  uri: string;
}
export interface Source {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: Gcs;
  remote: Remote;
}
export interface Deb {
  pull_deps?: boolean;
  source: Source;
}
export interface Googet {
  name: string;
}
export interface Gcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface Remote {
  sha256_checksum?: string;
  uri: string;
}
export interface Source {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: Gcs;
  remote: Remote;
}
export interface Msi {
  properties?: string[];
  source: Source;
}
export interface Gcs {
  bucket: string;
  generation?: number;
  object: string;
}
export interface Remote {
  sha256_checksum?: string;
  uri: string;
}
export interface Source {
  allow_insecure?: boolean;
  local_path?: string;
  gcs: Gcs;
  remote: Remote;
}
export interface Rpm {
  pull_deps?: boolean;
  source: Source;
}
export interface Yum {
  name: string;
}
export interface Zypper {
  name: string;
}
export interface Pkg {
  desired_state: string;
  apt: Apt;
  deb: Deb;
  googet: Googet;
  msi: Msi;
  rpm: Rpm;
  yum: Yum;
  zypper: Zypper;
}
export interface Apt {
  archive_type: string;
  components: string[];
  distribution: string;
  gpg_key?: string;
  uri: string;
}
export interface Goo {
  name: string;
  url: string;
}
export interface Yum {
  base_url: string;
  display_name?: string;
  gpg_keys?: string[];
  id: string;
}
export interface Zypper {
  base_url: string;
  display_name?: string;
  gpg_keys?: string[];
  id: string;
}
export interface Repository {
  apt: Apt;
  goo: Goo;
  yum: Yum;
  zypper: Zypper;
}
export interface Resources {
  id: string;
  exec: Exec;
  file: File;
  pkg: Pkg;
  repository: Repository;
}
export interface ResourceGroups {
  inventory_filters: InventoryFilters;
  resources: Resources;
}
export interface OsPolicies {
  allow_no_resource_group_match?: boolean;
  description?: string;
  id: string;
  mode: string;
  resource_groups: ResourceGroups;
}
export interface DisruptionBudget {
  fixed?: number;
  percent?: number;
}
export interface Rollout {
  min_wait_duration: string;
  disruption_budget: DisruptionBudget;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleOsConfigOsPolicyAssignmentArgs {
  description?: string;
  location: string;
  name: string;
  skip_await_rollout?: boolean;
  instance_filter: InstanceFilter;
  os_policies: OsPolicies;
  rollout: Rollout;
  timeouts: Timeouts;
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