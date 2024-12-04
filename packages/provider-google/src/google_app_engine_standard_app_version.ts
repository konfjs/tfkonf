import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAppEngineStandardAppVersionArgsAutomaticScalingStandardSchedulerSettings {
  max_instances?: number;
  min_instances?: number;
  target_cpu_utilization?: number;
  target_throughput_utilization?: number;
}

export interface GoogleAppEngineStandardAppVersionArgsAutomaticScaling {
  max_concurrent_requests?: number;
  max_idle_instances?: number;
  max_pending_latency?: string;
  min_idle_instances?: number;
  min_pending_latency?: string;
  standard_scheduler_settings: GoogleAppEngineStandardAppVersionArgsAutomaticScalingStandardSchedulerSettings;
}

export interface GoogleAppEngineStandardAppVersionArgsBasicScaling {
  idle_timeout?: string;
  max_instances: number;
}

export interface GoogleAppEngineStandardAppVersionArgsDeploymentFiles {
  name: string;
  sha1_sum?: string;
  source_url: string;
}

export interface GoogleAppEngineStandardAppVersionArgsDeploymentZip {
  files_count?: number;
  source_url: string;
}

export interface GoogleAppEngineStandardAppVersionArgsDeployment {
  files: GoogleAppEngineStandardAppVersionArgsDeploymentFiles;
  zip: GoogleAppEngineStandardAppVersionArgsDeploymentZip;
}

export interface GoogleAppEngineStandardAppVersionArgsEntrypoint {
  shell: string;
}

export interface GoogleAppEngineStandardAppVersionArgsHandlersScript {
  script_path: string;
}

export interface GoogleAppEngineStandardAppVersionArgsHandlersStaticFiles {
  application_readable?: boolean;
  expiration?: string;
  http_headers?: { [key: string]: string };
  mime_type?: string;
  path?: string;
  require_matching_file?: boolean;
  upload_path_regex?: string;
}

export interface GoogleAppEngineStandardAppVersionArgsHandlers {
  auth_fail_action?: string;
  login?: string;
  redirect_http_response_code?: string;
  security_level?: string;
  url_regex?: string;
  script: GoogleAppEngineStandardAppVersionArgsHandlersScript;
  static_files: GoogleAppEngineStandardAppVersionArgsHandlersStaticFiles;
}

export interface GoogleAppEngineStandardAppVersionArgsLibraries {
  name?: string;
  version?: string;
}

export interface GoogleAppEngineStandardAppVersionArgsManualScaling {
  instances: number;
}

export interface GoogleAppEngineStandardAppVersionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAppEngineStandardAppVersionArgsVpcAccessConnector {
  egress_setting?: string;
  name: string;
}

export interface GoogleAppEngineStandardAppVersionArgs {
  app_engine_apis?: boolean;
  delete_service_on_destroy?: boolean;
  env_variables?: { [key: string]: string };
  inbound_services?: string[];
  noop_on_destroy?: boolean;
  runtime: string;
  runtime_api_version?: string;
  service: string;
  threadsafe?: boolean;
  version_id?: string;
  automatic_scaling: GoogleAppEngineStandardAppVersionArgsAutomaticScaling;
  basic_scaling: GoogleAppEngineStandardAppVersionArgsBasicScaling;
  deployment: GoogleAppEngineStandardAppVersionArgsDeployment;
  entrypoint: GoogleAppEngineStandardAppVersionArgsEntrypoint;
  handlers: GoogleAppEngineStandardAppVersionArgsHandlers;
  libraries: GoogleAppEngineStandardAppVersionArgsLibraries;
  manual_scaling: GoogleAppEngineStandardAppVersionArgsManualScaling;
  timeouts?: GoogleAppEngineStandardAppVersionArgsTimeouts;
  vpc_access_connector: GoogleAppEngineStandardAppVersionArgsVpcAccessConnector;
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
