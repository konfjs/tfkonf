import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetworkServicesEdgeCacheOriginArgsAwsV4Authentication {
  access_key_id: string;
  origin_region: string;
  secret_access_key_version: string;
}
export interface GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionHeaderActionRequestHeadersToAdd {
  header_name: string;
  header_value: string;
  replace?: boolean;
}
export interface GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionHeaderAction {
  request_headers_to_add: GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionHeaderActionRequestHeadersToAdd;
}
export interface GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionUrlRewrite {
  host_rewrite?: string;
}
export interface GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideAction {
  header_action: GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionHeaderAction;
  url_rewrite: GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideActionUrlRewrite;
}
export interface GoogleNetworkServicesEdgeCacheOriginArgsOriginRedirect {
  redirect_conditions?: string[];
}
export interface GoogleNetworkServicesEdgeCacheOriginArgstimeout {
  connect_timeout?: string;
  max_attempts_timeout?: string;
  read_timeout?: string;
  response_timeout?: string;
}
export interface GoogleNetworkServicesEdgeCacheOriginArgstimeouts {
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
  aws_v4_authentication: GoogleNetworkServicesEdgeCacheOriginArgsAwsV4Authentication;
  origin_override_action: GoogleNetworkServicesEdgeCacheOriginArgsOriginOverrideAction;
  origin_redirect: GoogleNetworkServicesEdgeCacheOriginArgsOriginRedirect;
  timeout: GoogleNetworkServicesEdgeCacheOriginArgstimeout;
  timeouts: GoogleNetworkServicesEdgeCacheOriginArgstimeouts;
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