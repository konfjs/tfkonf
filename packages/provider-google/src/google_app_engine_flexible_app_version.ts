import { TerraformConfig, TerraformResource } from "tfs";
export interface ApiConfig {
  auth_fail_action?: string;
  login?: string;
  script: string;
  security_level?: string;
  url?: string;
}
export interface CpuUtilization {
  aggregation_window_length?: string;
  target_utilization: number;
}
export interface DiskUtilization {
  target_read_bytes_per_second?: number;
  target_read_ops_per_second?: number;
  target_write_bytes_per_second?: number;
  target_write_ops_per_second?: number;
}
export interface NetworkUtilization {
  target_received_bytes_per_second?: number;
  target_received_packets_per_second?: number;
  target_sent_bytes_per_second?: number;
  target_sent_packets_per_second?: number;
}
export interface RequestUtilization {
  target_concurrent_requests?: number;
  target_request_count_per_second?: string;
}
export interface AutomaticScaling {
  cool_down_period?: string;
  max_idle_instances?: number;
  max_pending_latency?: string;
  max_total_instances?: number;
  min_idle_instances?: number;
  min_pending_latency?: string;
  min_total_instances?: number;
  cpu_utilization: CpuUtilization;
  disk_utilization: DiskUtilization;
  network_utilization: NetworkUtilization;
  request_utilization: RequestUtilization;
}
export interface CloudBuildOptions {
  app_yaml_path: string;
  cloud_build_timeout?: string;
}
export interface Container {
  image: string;
}
export interface Files {
  name: string;
  sha1_sum?: string;
  source_url: string;
}
export interface Zip {
  files_count?: number;
  source_url: string;
}
export interface Deployment {
  cloud_build_options: CloudBuildOptions;
  container: Container;
  files: Files;
  zip: Zip;
}
export interface EndpointsApiService {
  config_id?: string;
  disable_trace_sampling?: boolean;
  name: string;
  rollout_strategy?: string;
}
export interface Entrypoint {
  shell: string;
}
export interface FlexibleRuntimeSettings {
  operating_system?: string;
  runtime_version?: string;
}
export interface Script {
  script_path: string;
}
export interface StaticFiles {
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
export interface Handlers {
  auth_fail_action?: string;
  login?: string;
  redirect_http_response_code?: string;
  security_level?: string;
  url_regex?: string;
  script: Script;
  static_files: StaticFiles;
}
export interface LivenessCheck {
  check_interval?: string;
  failure_threshold?: number;
  host?: string;
  initial_delay?: string;
  path: string;
  success_threshold?: number;
  timeout?: string;
}
export interface ManualScaling {
  instances: number;
}
export interface Network {
  forwarded_ports?: string[];
  instance_tag?: string;
  name: string;
  session_affinity?: boolean;
  subnetwork?: string;
}
export interface ReadinessCheck {
  app_start_timeout?: string;
  check_interval?: string;
  failure_threshold?: number;
  host?: string;
  path: string;
  success_threshold?: number;
  timeout?: string;
}
export interface Volumes {
  name: string;
  size_gb: number;
  volume_type: string;
}
export interface Resources {
  cpu?: number;
  disk_gb?: number;
  memory_gb?: number;
  volumes: Volumes;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VpcAccessConnector {
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
  api_config: ApiConfig;
  automatic_scaling: AutomaticScaling;
  deployment: Deployment;
  endpoints_api_service: EndpointsApiService;
  entrypoint: Entrypoint;
  flexible_runtime_settings: FlexibleRuntimeSettings;
  handlers: Handlers;
  liveness_check: LivenessCheck;
  manual_scaling: ManualScaling;
  network: Network;
  readiness_check: ReadinessCheck;
  resources: Resources;
  timeouts: Timeouts;
  vpc_access_connector: VpcAccessConnector;
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