import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsV4Authentication {
  access_key_id: string;
  origin_region: string;
  secret_access_key_version: string;
}
export interface RequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace?: boolean;
}
export interface HeaderAction {
  request_headers_to_add: RequestHeadersToAdd;
}
export interface UrlRewrite {
  host_rewrite?: string;
}
export interface OriginOverrideAction {
  header_action: HeaderAction;
  url_rewrite: UrlRewrite;
}
export interface OriginRedirect {
  redirect_conditions?: string[];
}
export interface Timeout {
  connect_timeout?: string;
  max_attempts_timeout?: string;
  read_timeout?: string;
  response_timeout?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkServicesEdgeCacheOriginArgs {
  description?: string;
  failover_origin?: string;
  labels?: {
    [key: string]: string;
  };
  max_attempts?: number;
  name: string;
  origin_address: string;
  aws_v4_authentication: AwsV4Authentication;
  origin_override_action: OriginOverrideAction;
  origin_redirect: OriginRedirect;
  timeout: Timeout;
  timeouts: Timeouts;
}
export class google_network_services_edge_cache_origin extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly port?: number;
  readonly project?: string;
  readonly protocol?: string;
  readonly retry_conditions?: string[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkServicesEdgeCacheOriginArgs) {
    super(config, "resource", args, resourceName, "google_network_services_edge_cache_origin");
  }
}