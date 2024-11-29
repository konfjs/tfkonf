import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigConfigmanagementConfigSyncGit {
  gcp_service_account_email?: string;
  https_proxy?: string;
  policy_dir?: string;
  secret_type: string;
  sync_branch?: string;
  sync_repo?: string;
  sync_rev?: string;
  sync_wait_secs?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigConfigmanagementConfigSyncOci {
  gcp_service_account_email?: string;
  policy_dir?: string;
  secret_type: string;
  sync_repo?: string;
  sync_wait_secs?: string;
  version?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigConfigmanagementConfigSync {
  enabled?: boolean;
  prevent_drift?: boolean;
  source_format?: string;
  git: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigConfigmanagementConfigSyncGit;
  oci: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigConfigmanagementConfigSyncOci;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigConfigmanagement {
  management?: string;
  version?: string;
  config_sync: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigConfigmanagementConfigSync;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigMesh {
  management: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits {
  cpu?: string;
  memory?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests {
  cpu?: string;
  memory?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources {
  limits: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits;
  requests: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration {
  effect?: string;
  key?: string;
  operator?: string;
  value?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs {
  component: string;
  container_resources: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources;
  pod_toleration: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring {}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles {
  bundle: string;
  exempted_namespaces?: string[];
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary {
  installation?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent {
  bundles: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles;
  template_library: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig {
  audit_interval_seconds?: number;
  constraint_violation_limit?: number;
  exemptable_namespaces?: string[];
  install_spec: string;
  log_denies_enabled?: boolean;
  mutation_enabled?: boolean;
  referential_rules_enabled?: boolean;
  deployment_configs: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs;
  monitoring: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring;
  policy_content: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontroller {
  policy_controller_hub_config: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfig {
  configmanagement: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigConfigmanagement;
  mesh: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigMesh;
  policycontroller: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigPolicycontroller;
}
export interface GoogleGkeHubFeatureArgsSpecClusterupgradeGkeUpgradeOverridesPostConditions {
  soaking: string;
}
export interface GoogleGkeHubFeatureArgsSpecClusterupgradeGkeUpgradeOverridesUpgrade {
  name: string;
  version: string;
}
export interface GoogleGkeHubFeatureArgsSpecClusterupgradeGkeUpgradeOverrides {
  post_conditions: GoogleGkeHubFeatureArgsSpecClusterupgradeGkeUpgradeOverridesPostConditions;
  upgrade: GoogleGkeHubFeatureArgsSpecClusterupgradeGkeUpgradeOverridesUpgrade;
}
export interface GoogleGkeHubFeatureArgsSpecClusterupgradePostConditions {
  soaking: string;
}
export interface GoogleGkeHubFeatureArgsSpecClusterupgrade {
  upstream_fleets: string[];
  gke_upgrade_overrides: GoogleGkeHubFeatureArgsSpecClusterupgradeGkeUpgradeOverrides;
  post_conditions: GoogleGkeHubFeatureArgsSpecClusterupgradePostConditions;
}
export interface GoogleGkeHubFeatureArgsSpecFleetobservabilityLoggingConfigDefaultConfig {
  mode?: string;
}
export interface GoogleGkeHubFeatureArgsSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig {
  mode?: string;
}
export interface GoogleGkeHubFeatureArgsSpecFleetobservabilityLoggingConfig {
  default_config: GoogleGkeHubFeatureArgsSpecFleetobservabilityLoggingConfigDefaultConfig;
  fleet_scope_logs_config: GoogleGkeHubFeatureArgsSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig;
}
export interface GoogleGkeHubFeatureArgsSpecFleetobservability {
  logging_config: GoogleGkeHubFeatureArgsSpecFleetobservabilityLoggingConfig;
}
export interface GoogleGkeHubFeatureArgsSpecMulticlusteringress {
  config_membership: string;
}
export interface GoogleGkeHubFeatureArgsSpec {
  clusterupgrade: GoogleGkeHubFeatureArgsSpecClusterupgrade;
  fleetobservability: GoogleGkeHubFeatureArgsSpecFleetobservability;
  multiclusteringress: GoogleGkeHubFeatureArgsSpecMulticlusteringress;
}
export interface GoogleGkeHubFeatureArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeHubFeatureArgs {
  labels?: {
    [key: string]: string;
  };
  location: string;
  name?: string;
  fleet_default_member_config: GoogleGkeHubFeatureArgsFleetDefaultMemberConfig;
  spec: GoogleGkeHubFeatureArgsSpec;
  timeouts: GoogleGkeHubFeatureArgsTimeouts;
}
export class google_gke_hub_feature extends TerraformResource {
  readonly create_time!: string;
  readonly delete_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly resource_state!: any[];
  readonly state!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubFeatureArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_feature");
  }
}