import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudTasksQueueArgsAppEngineRoutingOverride {
  instance?: string;
  service?: string;
  version?: string;
}
export interface GoogleCloudTasksQueueArgsHttpTargetHeaderOverridesHeader {
  key: string;
  value: string;
}
export interface GoogleCloudTasksQueueArgsHttpTargetHeaderOverrides {
  header: GoogleCloudTasksQueueArgsHttpTargetHeaderOverridesHeader;
}
export interface GoogleCloudTasksQueueArgsHttpTargetOauthToken {
  service_account_email: string;
}
export interface GoogleCloudTasksQueueArgsHttpTargetOidcToken {
  service_account_email: string;
}
export interface GoogleCloudTasksQueueArgsHttpTargetUriOverridePathOverride {}
export interface GoogleCloudTasksQueueArgsHttpTargetUriOverrideQueryOverride {}
export interface GoogleCloudTasksQueueArgsHttpTargetUriOverride {
  host?: string;
  port?: string;
  path_override: GoogleCloudTasksQueueArgsHttpTargetUriOverridePathOverride;
  query_override: GoogleCloudTasksQueueArgsHttpTargetUriOverrideQueryOverride;
}
export interface GoogleCloudTasksQueueArgsHttpTarget {
  header_overrides: GoogleCloudTasksQueueArgsHttpTargetHeaderOverrides;
  oauth_token: GoogleCloudTasksQueueArgsHttpTargetOauthToken;
  oidc_token: GoogleCloudTasksQueueArgsHttpTargetOidcToken;
  uri_override: GoogleCloudTasksQueueArgsHttpTargetUriOverride;
}
export interface GoogleCloudTasksQueueArgsRateLimits {}
export interface GoogleCloudTasksQueueArgsRetryConfig {}
export interface GoogleCloudTasksQueueArgsStackdriverLoggingConfig {
  sampling_ratio: number;
}
export interface GoogleCloudTasksQueueArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudTasksQueueArgs {
  location: string;
  name?: string;
  app_engine_routing_override: GoogleCloudTasksQueueArgsAppEngineRoutingOverride;
  http_target: GoogleCloudTasksQueueArgsHttpTarget;
  rate_limits: GoogleCloudTasksQueueArgsRateLimits;
  retry_config: GoogleCloudTasksQueueArgsRetryConfig;
  stackdriver_logging_config: GoogleCloudTasksQueueArgsStackdriverLoggingConfig;
  timeouts: GoogleCloudTasksQueueArgsTimeouts;
}
export class google_cloud_tasks_queue extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudTasksQueueArgs) {
    super(config, "resource", args, resourceName, "google_cloud_tasks_queue");
  }
}