import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeHubFeatureMembershipArgsconfigmanagementbinauthz {
  enabled?: boolean;
}
export interface GoogleGkeHubFeatureMembershipArgsconfigmanagementConfigSyncgit {
  gcp_service_account_email?: string;
  https_proxy?: string;
  policy_dir?: string;
  secret_type?: string;
  sync_branch?: string;
  sync_repo?: string;
  sync_rev?: string;
  sync_wait_secs?: string;
}
export interface GoogleGkeHubFeatureMembershipArgsconfigmanagementConfigSyncoci {
  gcp_service_account_email?: string;
  policy_dir?: string;
  secret_type?: string;
  sync_repo?: string;
  sync_wait_secs?: string;
}
export interface GoogleGkeHubFeatureMembershipArgsconfigmanagementConfigSync {
  enabled?: boolean;
  metrics_gcp_service_account_email?: string;
  source_format?: string;
  git: GoogleGkeHubFeatureMembershipArgsconfigmanagementConfigSyncgit;
  oci: GoogleGkeHubFeatureMembershipArgsconfigmanagementConfigSyncoci;
}
export interface GoogleGkeHubFeatureMembershipArgsconfigmanagementHierarchyController {
  enable_hierarchical_resource_quota?: boolean;
  enable_pod_tree_labels?: boolean;
  enabled?: boolean;
}
export interface GoogleGkeHubFeatureMembershipArgsconfigmanagementPolicyControllermonitoring {}
export interface GoogleGkeHubFeatureMembershipArgsconfigmanagementPolicyController {
  audit_interval_seconds?: string;
  enabled?: boolean;
  exemptable_namespaces?: string[];
  log_denies_enabled?: boolean;
  mutation_enabled?: boolean;
  referential_rules_enabled?: boolean;
  template_library_installed?: boolean;
  monitoring: GoogleGkeHubFeatureMembershipArgsconfigmanagementPolicyControllermonitoring;
}
export interface GoogleGkeHubFeatureMembershipArgsconfigmanagement {
  binauthz: GoogleGkeHubFeatureMembershipArgsconfigmanagementbinauthz;
  config_sync: GoogleGkeHubFeatureMembershipArgsconfigmanagementConfigSync;
  hierarchy_controller: GoogleGkeHubFeatureMembershipArgsconfigmanagementHierarchyController;
  policy_controller: GoogleGkeHubFeatureMembershipArgsconfigmanagementPolicyController;
}
export interface GoogleGkeHubFeatureMembershipArgsmesh {
  control_plane?: string;
  management?: string;
}
export interface GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourceslimits {
  cpu?: string;
  memory?: string;
}
export interface GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesrequests {
  cpu?: string;
  memory?: string;
}
export interface GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources {
  limits: GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourceslimits;
  requests: GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesrequests;
}
export interface GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations {
  effect?: string;
  key?: string;
  operator?: string;
  value?: string;
}
export interface GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigDeploymentConfigs {
  component_name: string;
  pod_affinity?: string;
  replica_count?: number;
  container_resources: GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources;
  pod_tolerations: GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations;
}
export interface GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigmonitoring {}
export interface GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigPolicyContentbundles {
  bundle_name: string;
  exempted_namespaces?: string[];
}
export interface GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary {
  installation?: string;
}
export interface GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigPolicyContent {
  bundles: GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigPolicyContentbundles;
  template_library: GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary;
}
export interface GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfig {
  audit_interval_seconds?: number;
  constraint_violation_limit?: number;
  exemptable_namespaces?: string[];
  install_spec?: string;
  log_denies_enabled?: boolean;
  mutation_enabled?: boolean;
  referential_rules_enabled?: boolean;
  deployment_configs: GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigDeploymentConfigs;
  monitoring: GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigmonitoring;
  policy_content: GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfigPolicyContent;
}
export interface GoogleGkeHubFeatureMembershipArgspolicycontroller {
  policy_controller_hub_config: GoogleGkeHubFeatureMembershipArgspolicycontrollerPolicyControllerHubConfig;
}
export interface GoogleGkeHubFeatureMembershipArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeHubFeatureMembershipArgs {
  feature: string;
  location: string;
  membership: string;
  membership_location?: string;
  configmanagement: GoogleGkeHubFeatureMembershipArgsconfigmanagement;
  mesh: GoogleGkeHubFeatureMembershipArgsmesh;
  policycontroller: GoogleGkeHubFeatureMembershipArgspolicycontroller;
  timeouts: GoogleGkeHubFeatureMembershipArgstimeouts;
}
export class google_gke_hub_feature_membership extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubFeatureMembershipArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_feature_membership");
  }
}