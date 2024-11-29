import { TerraformConfig, TerraformResource } from "tfs";
export interface Binauthz {
  enabled?: boolean;
}
export interface Git {
  gcp_service_account_email?: string;
  https_proxy?: string;
  policy_dir?: string;
  secret_type?: string;
  sync_branch?: string;
  sync_repo?: string;
  sync_rev?: string;
  sync_wait_secs?: string;
}
export interface Oci {
  gcp_service_account_email?: string;
  policy_dir?: string;
  secret_type?: string;
  sync_repo?: string;
  sync_wait_secs?: string;
}
export interface ConfigSync {
  enabled?: boolean;
  metrics_gcp_service_account_email?: string;
  source_format?: string;
  git: Git;
  oci: Oci;
}
export interface HierarchyController {
  enable_hierarchical_resource_quota?: boolean;
  enable_pod_tree_labels?: boolean;
  enabled?: boolean;
}
export interface Monitoring {}
export interface PolicyController {
  audit_interval_seconds?: string;
  enabled?: boolean;
  exemptable_namespaces?: string[];
  log_denies_enabled?: boolean;
  mutation_enabled?: boolean;
  referential_rules_enabled?: boolean;
  template_library_installed?: boolean;
  monitoring: Monitoring;
}
export interface Configmanagement {
  binauthz: Binauthz;
  config_sync: ConfigSync;
  hierarchy_controller: HierarchyController;
  policy_controller: PolicyController;
}
export interface Mesh {
  control_plane?: string;
  management?: string;
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
export interface PodTolerations {
  effect?: string;
  key?: string;
  operator?: string;
  value?: string;
}
export interface DeploymentConfigs {
  component_name: string;
  pod_affinity?: string;
  replica_count?: number;
  container_resources: ContainerResources;
  pod_tolerations: PodTolerations;
}
export interface Monitoring {}
export interface Bundles {
  bundle_name: string;
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
  install_spec?: string;
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
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleGkeHubFeatureMembershipArgs {
  feature: string;
  location: string;
  membership: string;
  membership_location?: string;
  configmanagement: Configmanagement;
  mesh: Mesh;
  policycontroller: Policycontroller;
  timeouts: Timeouts;
}
export class google_gke_hub_feature_membership extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleGkeHubFeatureMembershipArgs) {
    super(config, "resource", args, resourceName, "google_gke_hub_feature_membership");
  }
}