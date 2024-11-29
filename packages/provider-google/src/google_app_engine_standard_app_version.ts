import { TerraformConfig, TerraformResource } from "tfs";
export interface StandardSchedulerSettings {
  max_instances?: number;
  min_instances?: number;
  target_cpu_utilization?: number;
  target_throughput_utilization?: number;
}
export interface AutomaticScaling {
  max_concurrent_requests?: number;
  max_idle_instances?: number;
  max_pending_latency?: string;
  min_idle_instances?: number;
  min_pending_latency?: string;
  standard_scheduler_settings: StandardSchedulerSettings;
}
export interface BasicScaling {
  idle_timeout?: string;
  max_instances: number;
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
  files: Files;
  zip: Zip;
}
export interface Entrypoint {
  shell: string;
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
export interface Libraries {
  name?: string;
  version?: string;
}
export interface ManualScaling {
  instances: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VpcAccessConnector {
  egress_setting?: string;
  name: string;
}
export interface GoogleAppEngineStandardAppVersionArgs {
  app_engine_apis?: boolean;
  delete_service_on_destroy?: boolean;
  env_variables?: {
    [key: string]: string;
  };
  inbound_services?: string[];
  noop_on_destroy?: boolean;
  runtime: string;
  runtime_api_version?: string;
  service: string;
  threadsafe?: boolean;
  version_id?: string;
  automatic_scaling: AutomaticScaling;
  basic_scaling: BasicScaling;
  deployment: Deployment;
  entrypoint: Entrypoint;
  handlers: Handlers;
  libraries: Libraries;
  manual_scaling: ManualScaling;
  timeouts: Timeouts;
  vpc_access_connector: VpcAccessConnector;
}
export class google_app_engine_standard_app_version extends TerraformResource {
  readonly id?: string;
  readonly instance_class?: string;
  readonly name!: string;
  readonly project?: string;
  readonly service_account?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineStandardAppVersionArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_standard_app_version");
  }
}