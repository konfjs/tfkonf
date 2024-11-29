import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds {
  resource_group?: string;
  resource_kind?: string;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds {
  resource_group?: string;
  resource_kind?: string;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScope {
  all_group_kinds?: boolean;
  no_group_kinds?: boolean;
  excluded_group_kinds: GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds;
  selected_group_kinds: GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigExcludedNamespaces {
  namespaces: string[];
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependenciesRequiring {
  resource_group?: string;
  resource_kind?: string;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependenciesSatisfying {
  resource_group?: string;
  resource_kind?: string;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependencies {
  requiring: GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependenciesRequiring;
  satisfying: GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependenciesSatisfying;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrder {
  group_kind_dependencies: GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependencies;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedApplicationsNamespacedNames {
  name: string;
  namespace: string;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedApplications {
  namespaced_names: GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedApplicationsNamespacedNames;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedNamespaces {
  namespaces: string[];
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesFieldActions {
  from_path?: string;
  op: string;
  path?: string;
  value?: string;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesResourceFilterGroupKinds {
  resource_group?: string;
  resource_kind?: string;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesResourceFilter {
  json_path?: string;
  namespaces?: string[];
  group_kinds: GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesResourceFilterGroupKinds;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRules {
  description?: string;
  field_actions: GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesFieldActions;
  resource_filter: GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesResourceFilter;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfigVolumeDataRestorePolicyBindings {
  policy: string;
  volume_type: string;
}
export interface GoogleGkeBackupRestorePlanArgsRestoreConfig {
  all_namespaces?: boolean;
  cluster_resource_conflict_policy?: string;
  namespaced_resource_restore_mode?: string;
  no_namespaces?: boolean;
  volume_data_restore_policy?: string;
  cluster_resource_restore_scope: GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScope;
  excluded_namespaces: GoogleGkeBackupRestorePlanArgsRestoreConfigExcludedNamespaces;
  restore_order: GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrder;
  selected_applications: GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedApplications;
  selected_namespaces: GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedNamespaces;
  transformation_rules: GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRules;
  volume_data_restore_policy_bindings: GoogleGkeBackupRestorePlanArgsRestoreConfigVolumeDataRestorePolicyBindings;
}
export interface GoogleGkeBackupRestorePlanArgsTimeouts {
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
  restore_config: GoogleGkeBackupRestorePlanArgsRestoreConfig;
  timeouts: GoogleGkeBackupRestorePlanArgsTimeouts;
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