import { TerraformConfig, TerraformResource } from "tfs";
export interface AppEngineRouting {
  instance?: string;
  service?: string;
  version?: string;
}
export interface AppEngineHttpTarget {
  body?: string;
  headers?: {
    [key: string]: string;
  };
  http_method?: string;
  relative_uri: string;
  app_engine_routing: AppEngineRouting;
}
export interface OauthToken {
  scope?: string;
  service_account_email: string;
}
export interface OidcToken {
  audience?: string;
  service_account_email: string;
}
export interface HttpTarget {
  body?: string;
  headers?: {
    [key: string]: string;
  };
  http_method?: string;
  uri: string;
  oauth_token: OauthToken;
  oidc_token: OidcToken;
}
export interface PubsubTarget {
  attributes?: {
    [key: string]: string;
  };
  data?: string;
  topic_name: string;
}
export interface RetryConfig {}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudSchedulerJobArgs {
  attempt_deadline?: string;
  description?: string;
  name: string;
  schedule?: string;
  time_zone?: string;
  app_engine_http_target: AppEngineHttpTarget;
  http_target: HttpTarget;
  pubsub_target: PubsubTarget;
  retry_config: RetryConfig;
  timeouts: Timeouts;
}
export class google_cloud_scheduler_job extends TerraformResource {
  readonly id?: string;
  readonly paused?: boolean;
  readonly project?: string;
  readonly region?: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudSchedulerJobArgs) {
    super(config, "resource", args, resourceName, "google_cloud_scheduler_job");
  }
}