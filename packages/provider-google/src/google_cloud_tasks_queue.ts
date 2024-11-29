import { TerraformConfig, TerraformResource } from "tfs";
export interface AppEngineRoutingOverride {
  instance?: string;
  service?: string;
  version?: string;
}
export interface Header {
  key: string;
  value: string;
}
export interface HeaderOverrides {
  header: Header;
}
export interface OauthToken {
  service_account_email: string;
}
export interface OidcToken {
  service_account_email: string;
}
export interface PathOverride {}
export interface QueryOverride {}
export interface UriOverride {
  host?: string;
  port?: string;
  path_override: PathOverride;
  query_override: QueryOverride;
}
export interface HttpTarget {
  header_overrides: HeaderOverrides;
  oauth_token: OauthToken;
  oidc_token: OidcToken;
  uri_override: UriOverride;
}
export interface RateLimits {}
export interface RetryConfig {}
export interface StackdriverLoggingConfig {
  sampling_ratio: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudTasksQueueArgs {
  location: string;
  name?: string;
  app_engine_routing_override: AppEngineRoutingOverride;
  http_target: HttpTarget;
  rate_limits: RateLimits;
  retry_config: RetryConfig;
  stackdriver_logging_config: StackdriverLoggingConfig;
  timeouts: Timeouts;
}
export class google_cloud_tasks_queue extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudTasksQueueArgs) {
    super(config, "resource", args, resourceName, "google_cloud_tasks_queue");
  }
}