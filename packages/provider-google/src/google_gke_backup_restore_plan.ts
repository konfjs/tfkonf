import { TerraformConfig, TerraformResource } from "tfs";
export interface ExcludedGroupKinds {
  resource_group?: string;
  resource_kind?: string;
}
export interface SelectedGroupKinds {
  resource_group?: string;
  resource_kind?: string;
}
export interface ClusterResourceRestoreScope {
  all_group_kinds?: boolean;
  no_group_kinds?: boolean;
  excluded_group_kinds: ExcludedGroupKinds;
  selected_group_kinds: SelectedGroupKinds;
}
export interface ExcludedNamespaces {
  namespaces: string[];
}
export interface Requiring {
  resource_group?: string;
  resource_kind?: string;
}
export interface Satisfying {
  resource_group?: string;
  resource_kind?: string;
}
export interface GroupKindDependencies {
  requiring: Requiring;
  satisfying: Satisfying;
}
export interface RestoreOrder {
  group_kind_dependencies: GroupKindDependencies;
}
export interface NamespacedNames {
  name: string;
  namespace: string;
}
export interface SelectedApplications {
  namespaced_names: NamespacedNames;
}
export interface SelectedNamespaces {
  namespaces: string[];
}
export interface FieldActions {
  from_path?: string;
  op: string;
  path?: string;
  value?: string;
}
export interface GroupKinds {
  resource_group?: string;
  resource_kind?: string;
}
export interface ResourceFilter {
  json_path?: string;
  namespaces?: string[];
  group_kinds: GroupKinds;
}
export interface TransformationRules {
  description?: string;
  field_actions: FieldActions;
  resource_filter: ResourceFilter;
}
export interface VolumeDataRestorePolicyBindings {
  policy: string;
  volume_type: string;
}
export interface RestoreConfig {
  all_namespaces?: boolean;
  cluster_resource_conflict_policy?: string;
  namespaced_resource_restore_mode?: string;
  no_namespaces?: boolean;
  volume_data_restore_policy?: string;
  cluster_resource_restore_scope: ClusterResourceRestoreScope;
  excluded_namespaces: ExcludedNamespaces;
  restore_order: RestoreOrder;
  selected_applications: SelectedApplications;
  selected_namespaces: SelectedNamespaces;
  transformation_rules: TransformationRules;
  volume_data_restore_policy_bindings: VolumeDataRestorePolicyBindings;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeBackupRestorePlanArgs {
  backup_plan: string;
  cluster: string;
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  restore_config: RestoreConfig;
  timeouts: Timeouts;
}
export class google_gke_backup_restore_plan extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly state_reason!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeBackupRestorePlanArgs) {
    super(config, "resource", args, resourceName, "google_gke_backup_restore_plan");
  }
}