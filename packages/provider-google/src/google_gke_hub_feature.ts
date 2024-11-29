import { TerraformConfig, TerraformResource } from "tfs";
export interface Git {
  gcp_service_account_email?: string;
  https_proxy?: string;
  policy_dir?: string;
  secret_type: string;
  sync_branch?: string;
  sync_repo?: string;
  sync_rev?: string;
  sync_wait_secs?: string;
}
export interface Oci {
  gcp_service_account_email?: string;
  policy_dir?: string;
  secret_type: string;
  sync_repo?: string;
  sync_wait_secs?: string;
  version?: string;
}
export interface ConfigSync {
  enabled?: boolean;
  prevent_drift?: boolean;
  source_format?: string;
  git: Git;
  oci: Oci;
}
export interface Configmanagement {
  management?: string;
  version?: string;
  config_sync: ConfigSync;
}
export interface Mesh {
  management: string;
}
export interface Limits {
  cpu?: string;
  memory?: string;
}
export interface Requests {
  cpu?: string;
  memory?: string;
}
export interface ContainerResources {
  limits: Limits;
  requests: Requests;
}
export interface PodToleration {
  effect?: string;
  key?: string;
  operator?: string;
  value?: string;
}
export interface DeploymentConfigs {
  component: string;
  container_resources: ContainerResources;
  pod_toleration: PodToleration;
}
export interface Monitoring {}
export interface Bundles {
  bundle: string;
  exempted_namespaces?: string[];
}
export interface TemplateLibrary {
  installation?: string;
}
export interface PolicyContent {
  bundles: Bundles;
  template_library: TemplateLibrary;
}
export interface PolicyControllerHubConfig {
  audit_interval_seconds?: number;
  constraint_violation_limit?: number;
  exemptable_namespaces?: string[];
  install_spec: string;
  log_denies_enabled?: boolean;
  mutation_enabled?: boolean;
  referential_rules_enabled?: boolean;
  deployment_configs: DeploymentConfigs;
  monitoring: Monitoring;
  policy_content: PolicyContent;
}
export interface Policycontroller {
  policy_controller_hub_config: PolicyControllerHubConfig;
}
export interface FleetDefaultMemberConfig {
  configmanagement: Configmanagement;
  mesh: Mesh;
  policycontroller: Policycontroller;
}
export interface PostConditions {
  soaking: string;
}
export interface Upgrade {
  name: string;
  version: string;
}
export interface GkeUpgradeOverrides {
  post_conditions: PostConditions;
  upgrade: Upgrade;
}
export interface PostConditions {
  soaking: string;
}
export interface Clusterupgrade {
  upstream_fleets: string[];
  gke_upgrade_overrides: GkeUpgradeOverrides;
  post_conditions: PostConditions;
}
export interface DefaultConfig {
  mode?: string;
}
export interface FleetScopeLogsConfig {
  mode?: string;
}
export interface LoggingConfig {
  default_config: DefaultConfig;
  fleet_scope_logs_config: FleetScopeLogsConfig;
}
export interface Fleetobservability {
  logging_config: LoggingConfig;
}
export interface Multiclusteringress {
  config_membership: string;
}
export interface Spec {
  clusterupgrade: Clusterupgrade;
  fleetobservability: Fleetobservability;
  multiclusteringress: Multiclusteringress;
}
export interface Timeouts {
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
  fleet_default_member_config: FleetDefaultMemberConfig;
  spec: Spec;
  timeouts: Timeouts;
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