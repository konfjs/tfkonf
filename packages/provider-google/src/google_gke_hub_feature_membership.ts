import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleGkeHubFeatureMembershipArgsConfigmanagementBinauthz {
  enabled?: boolean;
}
export interface GoogleGkeHubFeatureMembershipArgsConfigmanagementConfigSyncGit {
  gcp_service_account_email?: string;
  https_proxy?: string;
  policy_dir?: string;
  secret_type?: string;
  sync_branch?: string;
  sync_repo?: string;
  sync_rev?: string;
  sync_wait_secs?: string;
}
export interface GoogleGkeHubFeatureMembershipArgsConfigmanagementConfigSyncOci {
  gcp_service_account_email?: string;
  policy_dir?: string;
  secret_type?: string;
  sync_repo?: string;
  sync_wait_secs?: string;
}
export interface GoogleGkeHubFeatureMembershipArgsConfigmanagementConfigSync {
  enabled?: boolean;
  metrics_gcp_service_account_email?: string;
  source_format?: string;
  git: GoogleGkeHubFeatureMembershipArgsConfigmanagementConfigSyncGit;
  oci: GoogleGkeHubFeatureMembershipArgsConfigmanagementConfigSyncOci;
}
export interface GoogleGkeHubFeatureMembershipArgsConfigmanagementHierarchyController {
  enable_hierarchical_resource_quota?: boolean;
  enable_pod_tree_labels?: boolean;
  enabled?: boolean;
}
export interface GoogleGkeHubFeatureMembershipArgsConfigmanagementPolicyControllerMonitoring {}
export interface GoogleGkeHubFeatureMembershipArgsConfigmanagementPolicyController {
  audit_interval_seconds?: string;
  enabled?: boolean;
  exemptable_namespaces?: string[];
  log_denies_enabled?: boolean;
  mutation_enabled?: boolean;
  referential_rules_enabled?: boolean;
  template_library_installed?: boolean;
  monitoring: GoogleGkeHubFeatureMembershipArgsConfigmanagementPolicyControllerMonitoring;
}
export interface GoogleGkeHubFeatureMembershipArgsConfigmanagement {
  binauthz: GoogleGkeHubFeatureMembershipArgsConfigmanagementBinauthz;
  config_sync: GoogleGkeHubFeatureMembershipArgsConfigmanagementConfigSync;
  hierarchy_controller: GoogleGkeHubFeatureMembershipArgsConfigmanagementHierarchyController;
  policy_controller: GoogleGkeHubFeatureMembershipArgsConfigmanagementPolicyController;
}
export interface GoogleGkeHubFeatureMembershipArgsMesh {
  control_plane?: string;
  management?: string;
}
export interface GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits {
  cpu?: string;
  memory?: string;
}
export interface GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests {
  cpu?: string;
  memory?: string;
}
export interface GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources {
  limits: GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits;
  requests: GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests;
}
export interface GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations {
  effect?: string;
  key?: string;
  operator?: string;
  value?: string;
}
export interface GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigDeploymentConfigs {
  component_name: string;
  pod_affinity?: string;
  replica_count?: number;
  container_resources: GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources;
  pod_tolerations: GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations;
}
export interface GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigMonitoring {}
export interface GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigPolicyContentBundles {
  bundle_name: string;
  exempted_namespaces?: string[];
}
export interface GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary {
  installation?: string;
}
export interface GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigPolicyContent {
  bundles: GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigPolicyContentBundles;
  template_library: GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary;
}
export interface GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfig {
  audit_interval_seconds?: number;
  constraint_violation_limit?: number;
  exemptable_namespaces?: string[];
  install_spec?: string;
  log_denies_enabled?: boolean;
  mutation_enabled?: boolean;
  referential_rules_enabled?: boolean;
  deployment_configs: GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigDeploymentConfigs;
  monitoring: GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigMonitoring;
  policy_content: GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfigPolicyContent;
}
export interface GoogleGkeHubFeatureMembershipArgsPolicycontroller {
  policy_controller_hub_config: GoogleGkeHubFeatureMembershipArgsPolicycontrollerPolicyControllerHubConfig;
}
export interface GoogleGkeHubFeatureMembershipArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeHubFeatureMembershipArgs {
  feature: string;
  location: string;
  membership: string;
  membership_location?: string;
  configmanagement: GoogleGkeHubFeatureMembershipArgsConfigmanagement;
  mesh: GoogleGkeHubFeatureMembershipArgsMesh;
  policycontroller: GoogleGkeHubFeatureMembershipArgsPolicycontroller;
  timeouts?: GoogleGkeHubFeatureMembershipArgsTimeouts;
}
export class google_gke_hub_feature_membership extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubFeatureMembershipArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_feature_membership");
  }
}