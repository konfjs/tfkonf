import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleAppEngineFlexibleAppVersionArgsApiConfig {
  auth_fail_action?: string;
  login?: string;
  script: string;
  security_level?: string;
  url?: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsAutomaticScalingCpuUtilization {
  aggregation_window_length?: string;
  target_utilization: number;
}
export interface GoogleAppEngineFlexibleAppVersionArgsAutomaticScalingDiskUtilization {
  target_read_bytes_per_second?: number;
  target_read_ops_per_second?: number;
  target_write_bytes_per_second?: number;
  target_write_ops_per_second?: number;
}
export interface GoogleAppEngineFlexibleAppVersionArgsAutomaticScalingNetworkUtilization {
  target_received_bytes_per_second?: number;
  target_received_packets_per_second?: number;
  target_sent_bytes_per_second?: number;
  target_sent_packets_per_second?: number;
}
export interface GoogleAppEngineFlexibleAppVersionArgsAutomaticScalingRequestUtilization {
  target_concurrent_requests?: number;
  target_request_count_per_second?: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsAutomaticScaling {
  cool_down_period?: string;
  max_idle_instances?: number;
  max_pending_latency?: string;
  max_total_instances?: number;
  min_idle_instances?: number;
  min_pending_latency?: string;
  min_total_instances?: number;
  cpu_utilization: GoogleAppEngineFlexibleAppVersionArgsAutomaticScalingCpuUtilization;
  disk_utilization: GoogleAppEngineFlexibleAppVersionArgsAutomaticScalingDiskUtilization;
  network_utilization: GoogleAppEngineFlexibleAppVersionArgsAutomaticScalingNetworkUtilization;
  request_utilization: GoogleAppEngineFlexibleAppVersionArgsAutomaticScalingRequestUtilization;
}
export interface GoogleAppEngineFlexibleAppVersionArgsDeploymentCloudBuildOptions {
  app_yaml_path: string;
  cloud_build_timeout?: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsDeploymentContainer {
  image: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsDeploymentFiles {
  name: string;
  sha1_sum?: string;
  source_url: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsDeploymentZip {
  files_count?: number;
  source_url: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsDeployment {
  cloud_build_options: GoogleAppEngineFlexibleAppVersionArgsDeploymentCloudBuildOptions;
  container: GoogleAppEngineFlexibleAppVersionArgsDeploymentContainer;
  files: GoogleAppEngineFlexibleAppVersionArgsDeploymentFiles;
  zip: GoogleAppEngineFlexibleAppVersionArgsDeploymentZip;
}
export interface GoogleAppEngineFlexibleAppVersionArgsEndpointsApiService {
  config_id?: string;
  disable_trace_sampling?: boolean;
  name: string;
  rollout_strategy?: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsEntrypoint {
  shell: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsFlexibleRuntimeSettings {
  operating_system?: string;
  runtime_version?: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsHandlersScript {
  script_path: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsHandlersStaticFiles {
  application_readable?: boolean;
  expiration?: string;
  http_headers?: {
    [key: string]: string;
  };
  mime_type?: string;
  path?: string;
  require_matching_file?: boolean;
  upload_path_regex?: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsHandlers {
  auth_fail_action?: string;
  login?: string;
  redirect_http_response_code?: string;
  security_level?: string;
  url_regex?: string;
  script: GoogleAppEngineFlexibleAppVersionArgsHandlersScript;
  static_files: GoogleAppEngineFlexibleAppVersionArgsHandlersStaticFiles;
}
export interface GoogleAppEngineFlexibleAppVersionArgsLivenessCheck {
  check_interval?: string;
  failure_threshold?: number;
  host?: string;
  initial_delay?: string;
  path: string;
  success_threshold?: number;
  timeout?: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsManualScaling {
  instances: number;
}
export interface GoogleAppEngineFlexibleAppVersionArgsNetwork {
  forwarded_ports?: string[];
  instance_tag?: string;
  name: string;
  session_affinity?: boolean;
  subnetwork?: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsReadinessCheck {
  app_start_timeout?: string;
  check_interval?: string;
  failure_threshold?: number;
  host?: string;
  path: string;
  success_threshold?: number;
  timeout?: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsResourcesVolumes {
  name: string;
  size_gb: number;
  volume_type: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsResources {
  cpu?: number;
  disk_gb?: number;
  memory_gb?: number;
  volumes: GoogleAppEngineFlexibleAppVersionArgsResourcesVolumes;
}
export interface GoogleAppEngineFlexibleAppVersionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgsVpcAccessConnector {
  name: string;
}
export interface GoogleAppEngineFlexibleAppVersionArgs {
  beta_settings?: {
    [key: string]: string;
  };
  default_expiration?: string;
  delete_service_on_destroy?: boolean;
  env_variables?: {
    [key: string]: string;
  };
  inbound_services?: string[];
  instance_class?: string;
  nobuild_files_regex?: string;
  noop_on_destroy?: boolean;
  runtime: string;
  runtime_channel?: string;
  runtime_main_executable_path?: string;
  service: string;
  serving_status?: string;
  version_id?: string;
  api_config: GoogleAppEngineFlexibleAppVersionArgsApiConfig;
  automatic_scaling: GoogleAppEngineFlexibleAppVersionArgsAutomaticScaling;
  deployment: GoogleAppEngineFlexibleAppVersionArgsDeployment;
  endpoints_api_service: GoogleAppEngineFlexibleAppVersionArgsEndpointsApiService;
  entrypoint: GoogleAppEngineFlexibleAppVersionArgsEntrypoint;
  flexible_runtime_settings: GoogleAppEngineFlexibleAppVersionArgsFlexibleRuntimeSettings;
  handlers: GoogleAppEngineFlexibleAppVersionArgsHandlers;
  liveness_check: GoogleAppEngineFlexibleAppVersionArgsLivenessCheck;
  manual_scaling: GoogleAppEngineFlexibleAppVersionArgsManualScaling;
  network: GoogleAppEngineFlexibleAppVersionArgsNetwork;
  readiness_check: GoogleAppEngineFlexibleAppVersionArgsReadinessCheck;
  resources: GoogleAppEngineFlexibleAppVersionArgsResources;
  timeouts: GoogleAppEngineFlexibleAppVersionArgsTimeouts;
  vpc_access_connector: GoogleAppEngineFlexibleAppVersionArgsVpcAccessConnector;
}
export class google_app_engine_flexible_app_version extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly runtime_api_version?: string;
  readonly service_account?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineFlexibleAppVersionArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_flexible_app_version");
  }
}