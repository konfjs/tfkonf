import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleMonitoringUptimeCheckConfigArgsContentMatchersJsonPathMatcher {
  json_matcher?: string;
  json_path: string;
}
export interface GoogleMonitoringUptimeCheckConfigArgsContentMatchers {
  content: string;
  matcher?: string;
  json_path_matcher: GoogleMonitoringUptimeCheckConfigArgsContentMatchersJsonPathMatcher;
}
export interface GoogleMonitoringUptimeCheckConfigArgsHttpCheckAcceptedResponseStatusCodes {
  status_class?: string;
  status_value?: number;
}
export interface GoogleMonitoringUptimeCheckConfigArgsHttpCheckAuthInfo {
  password: string;
  username: string;
}
export interface GoogleMonitoringUptimeCheckConfigArgsHttpCheckPingConfig {
  pings_count: number;
}
export interface GoogleMonitoringUptimeCheckConfigArgsHttpCheckServiceAgentAuthentication {
  type?: string;
}
export interface GoogleMonitoringUptimeCheckConfigArgsHttpCheck {
  body?: string;
  content_type?: string;
  custom_content_type?: string;
  mask_headers?: boolean;
  path?: string;
  request_method?: string;
  use_ssl?: boolean;
  validate_ssl?: boolean;
  accepted_response_status_codes: GoogleMonitoringUptimeCheckConfigArgsHttpCheckAcceptedResponseStatusCodes;
  auth_info: GoogleMonitoringUptimeCheckConfigArgsHttpCheckAuthInfo;
  ping_config: GoogleMonitoringUptimeCheckConfigArgsHttpCheckPingConfig;
  service_agent_authentication: GoogleMonitoringUptimeCheckConfigArgsHttpCheckServiceAgentAuthentication;
}
export interface GoogleMonitoringUptimeCheckConfigArgsMonitoredResource {
  labels: {
    [key: string]: string;
  };
  type: string;
}
export interface GoogleMonitoringUptimeCheckConfigArgsResourceGroup {
  group_id?: string;
  resource_type?: string;
}
export interface GoogleMonitoringUptimeCheckConfigArgsSyntheticMonitorCloudFunctionV2 {
  name: string;
}
export interface GoogleMonitoringUptimeCheckConfigArgsSyntheticMonitor {
  cloud_function_v2: GoogleMonitoringUptimeCheckConfigArgsSyntheticMonitorCloudFunctionV2;
}
export interface GoogleMonitoringUptimeCheckConfigArgsTcpCheckPingConfig {
  pings_count: number;
}
export interface GoogleMonitoringUptimeCheckConfigArgsTcpCheck {
  port: number;
  ping_config: GoogleMonitoringUptimeCheckConfigArgsTcpCheckPingConfig;
}
export interface GoogleMonitoringUptimeCheckConfigArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMonitoringUptimeCheckConfigArgs {
  display_name: string;
  period?: string;
  selected_regions?: string[];
  timeout: string;
  user_labels?: {
    [key: string]: string;
  };
  content_matchers: GoogleMonitoringUptimeCheckConfigArgsContentMatchers;
  http_check: GoogleMonitoringUptimeCheckConfigArgsHttpCheck;
  monitored_resource: GoogleMonitoringUptimeCheckConfigArgsMonitoredResource;
  resource_group: GoogleMonitoringUptimeCheckConfigArgsResourceGroup;
  synthetic_monitor: GoogleMonitoringUptimeCheckConfigArgsSyntheticMonitor;
  tcp_check: GoogleMonitoringUptimeCheckConfigArgsTcpCheck;
  timeouts: GoogleMonitoringUptimeCheckConfigArgstimeouts;
}
export class google_monitoring_uptime_check_config extends TerraformResource {
  readonly checker_type?: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly uptime_check_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringUptimeCheckConfigArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_uptime_check_config");
  }
}