import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigconfigmanagementConfigSyncgit {
  gcp_service_account_email?: string;
  https_proxy?: string;
  policy_dir?: string;
  secret_type: string;
  sync_branch?: string;
  sync_repo?: string;
  sync_rev?: string;
  sync_wait_secs?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigconfigmanagementConfigSyncoci {
  gcp_service_account_email?: string;
  policy_dir?: string;
  secret_type: string;
  sync_repo?: string;
  sync_wait_secs?: string;
  version?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigconfigmanagementConfigSync {
  enabled?: boolean;
  prevent_drift?: boolean;
  source_format?: string;
  git: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigconfigmanagementConfigSyncgit;
  oci: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigconfigmanagementConfigSyncoci;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigconfigmanagement {
  management?: string;
  version?: string;
  config_sync: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigconfigmanagementConfigSync;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigmesh {
  management: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourceslimits {
  cpu?: string;
  memory?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesrequests {
  cpu?: string;
  memory?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources {
  limits: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourceslimits;
  requests: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesrequests;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration {
  effect?: string;
  key?: string;
  operator?: string;
  value?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigDeploymentConfigs {
  component: string;
  container_resources: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources;
  pod_toleration: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigmonitoring {}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigPolicyContentbundles {
  bundle: string;
  exempted_namespaces?: string[];
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary {
  installation?: string;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigPolicyContent {
  bundles: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigPolicyContentbundles;
  template_library: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfig {
  audit_interval_seconds?: number;
  constraint_violation_limit?: number;
  exemptable_namespaces?: string[];
  install_spec: string;
  log_denies_enabled?: boolean;
  mutation_enabled?: boolean;
  referential_rules_enabled?: boolean;
  deployment_configs: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigDeploymentConfigs;
  monitoring: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigmonitoring;
  policy_content: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfigPolicyContent;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontroller {
  policy_controller_hub_config: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontrollerPolicyControllerHubConfig;
}
export interface GoogleGkeHubFeatureArgsFleetDefaultMemberConfig {
  configmanagement: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigconfigmanagement;
  mesh: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigmesh;
  policycontroller: GoogleGkeHubFeatureArgsFleetDefaultMemberConfigpolicycontroller;
}
export interface GoogleGkeHubFeatureArgsspecclusterupgradeGkeUpgradeOverridesPostConditions {
  soaking: string;
}
export interface GoogleGkeHubFeatureArgsspecclusterupgradeGkeUpgradeOverridesupgrade {
  name: string;
  version: string;
}
export interface GoogleGkeHubFeatureArgsspecclusterupgradeGkeUpgradeOverrides {
  post_conditions: GoogleGkeHubFeatureArgsspecclusterupgradeGkeUpgradeOverridesPostConditions;
  upgrade: GoogleGkeHubFeatureArgsspecclusterupgradeGkeUpgradeOverridesupgrade;
}
export interface GoogleGkeHubFeatureArgsspecclusterupgradePostConditions {
  soaking: string;
}
export interface GoogleGkeHubFeatureArgsspecclusterupgrade {
  upstream_fleets: string[];
  gke_upgrade_overrides: GoogleGkeHubFeatureArgsspecclusterupgradeGkeUpgradeOverrides;
  post_conditions: GoogleGkeHubFeatureArgsspecclusterupgradePostConditions;
}
export interface GoogleGkeHubFeatureArgsspecfleetobservabilityLoggingConfigDefaultConfig {
  mode?: string;
}
export interface GoogleGkeHubFeatureArgsspecfleetobservabilityLoggingConfigFleetScopeLogsConfig {
  mode?: string;
}
export interface GoogleGkeHubFeatureArgsspecfleetobservabilityLoggingConfig {
  default_config: GoogleGkeHubFeatureArgsspecfleetobservabilityLoggingConfigDefaultConfig;
  fleet_scope_logs_config: GoogleGkeHubFeatureArgsspecfleetobservabilityLoggingConfigFleetScopeLogsConfig;
}
export interface GoogleGkeHubFeatureArgsspecfleetobservability {
  logging_config: GoogleGkeHubFeatureArgsspecfleetobservabilityLoggingConfig;
}
export interface GoogleGkeHubFeatureArgsspecmulticlusteringress {
  config_membership: string;
}
export interface GoogleGkeHubFeatureArgsspec {
  clusterupgrade: GoogleGkeHubFeatureArgsspecclusterupgrade;
  fleetobservability: GoogleGkeHubFeatureArgsspecfleetobservability;
  multiclusteringress: GoogleGkeHubFeatureArgsspecmulticlusteringress;
}
export interface GoogleGkeHubFeatureArgstimeouts {
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
  spec: GoogleGkeHubFeatureArgsspec;
  timeouts: GoogleGkeHubFeatureArgstimeouts;
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