import { TerraformConfig, TerraformResource } from "tfs";
export interface JsonPathMatcher {
  json_matcher?: string;
  json_path: string;
}
export interface ContentMatchers {
  content: string;
  matcher?: string;
  json_path_matcher: JsonPathMatcher;
}
export interface AcceptedResponseStatusCodes {
  status_class?: string;
  status_value?: number;
}
export interface AuthInfo {
  password: string;
  username: string;
}
export interface PingConfig {
  pings_count: number;
}
export interface ServiceAgentAuthentication {
  type?: string;
}
export interface HttpCheck {
  body?: string;
  content_type?: string;
  custom_content_type?: string;
  mask_headers?: boolean;
  path?: string;
  request_method?: string;
  use_ssl?: boolean;
  validate_ssl?: boolean;
  accepted_response_status_codes: AcceptedResponseStatusCodes;
  auth_info: AuthInfo;
  ping_config: PingConfig;
  service_agent_authentication: ServiceAgentAuthentication;
}
export interface MonitoredResource {
  labels: {
    [key: string]: string;
  };
  type: string;
}
export interface ResourceGroup {
  group_id?: string;
  resource_type?: string;
}
export interface CloudFunctionV2 {
  name: string;
}
export interface SyntheticMonitor {
  cloud_function_v2: CloudFunctionV2;
}
export interface PingConfig {
  pings_count: number;
}
export interface TcpCheck {
  port: number;
  ping_config: PingConfig;
}
export interface Timeouts {
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
  content_matchers: ContentMatchers;
  http_check: HttpCheck;
  monitored_resource: MonitoredResource;
  resource_group: ResourceGroup;
  synthetic_monitor: SyntheticMonitor;
  tcp_check: TcpCheck;
  timeouts: Timeouts;
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