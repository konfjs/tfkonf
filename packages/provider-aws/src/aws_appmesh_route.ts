import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppmeshRouteArgsspecGrpcRouteactionWeightedTarget {
  virtual_node: string;
  weight: number;
}
export interface AwsAppmeshRouteArgsspecGrpcRouteaction {
  weighted_target: AwsAppmeshRouteArgsspecGrpcRouteactionWeightedTarget;
}
export interface AwsAppmeshRouteArgsspecGrpcRoutematchmetadatamatchrange {
  end: number;
  start: number;
}
export interface AwsAppmeshRouteArgsspecGrpcRoutematchmetadatamatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range: AwsAppmeshRouteArgsspecGrpcRoutematchmetadatamatchrange;
}
export interface AwsAppmeshRouteArgsspecGrpcRoutematchmetadata {
  invert?: boolean;
  name: string;
  match: AwsAppmeshRouteArgsspecGrpcRoutematchmetadatamatch;
}
export interface AwsAppmeshRouteArgsspecGrpcRoutematch {
  method_name?: string;
  port?: number;
  prefix?: string;
  service_name?: string;
  metadata: AwsAppmeshRouteArgsspecGrpcRoutematchmetadata;
}
export interface AwsAppmeshRouteArgsspecGrpcRouteRetryPolicyPerRetryTimeout {
  unit: string;
  value: number;
}
export interface AwsAppmeshRouteArgsspecGrpcRouteRetryPolicy {
  grpc_retry_events?: string[];
  http_retry_events?: string[];
  max_retries: number;
  tcp_retry_events?: string[];
  per_retry_timeout: AwsAppmeshRouteArgsspecGrpcRouteRetryPolicyPerRetryTimeout;
}
export interface AwsAppmeshRouteArgsspecGrpcRoutetimeoutidle {
  unit: string;
  value: number;
}
export interface AwsAppmeshRouteArgsspecGrpcRoutetimeoutPerRequest {
  unit: string;
  value: number;
}
export interface AwsAppmeshRouteArgsspecGrpcRoutetimeout {
  idle: AwsAppmeshRouteArgsspecGrpcRoutetimeoutidle;
  per_request: AwsAppmeshRouteArgsspecGrpcRoutetimeoutPerRequest;
}
export interface AwsAppmeshRouteArgsspecGrpcRoute {
  action: AwsAppmeshRouteArgsspecGrpcRouteaction;
  match: AwsAppmeshRouteArgsspecGrpcRoutematch;
  retry_policy: AwsAppmeshRouteArgsspecGrpcRouteRetryPolicy;
  timeout: AwsAppmeshRouteArgsspecGrpcRoutetimeout;
}
export interface AwsAppmeshRouteArgsspecHttp2RouteactionWeightedTarget {
  virtual_node: string;
  weight: number;
}
export interface AwsAppmeshRouteArgsspecHttp2Routeaction {
  weighted_target: AwsAppmeshRouteArgsspecHttp2RouteactionWeightedTarget;
}
export interface AwsAppmeshRouteArgsspecHttp2Routematchheadermatchrange {
  end: number;
  start: number;
}
export interface AwsAppmeshRouteArgsspecHttp2Routematchheadermatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range: AwsAppmeshRouteArgsspecHttp2Routematchheadermatchrange;
}
export interface AwsAppmeshRouteArgsspecHttp2Routematchheader {
  invert?: boolean;
  name: string;
  match: AwsAppmeshRouteArgsspecHttp2Routematchheadermatch;
}
export interface AwsAppmeshRouteArgsspecHttp2Routematchpath {
  exact?: string;
  regex?: string;
}
export interface AwsAppmeshRouteArgsspecHttp2RoutematchQueryParametermatch {
  exact?: string;
}
export interface AwsAppmeshRouteArgsspecHttp2RoutematchQueryParameter {
  name: string;
  match: AwsAppmeshRouteArgsspecHttp2RoutematchQueryParametermatch;
}
export interface AwsAppmeshRouteArgsspecHttp2Routematch {
  method?: string;
  port?: number;
  prefix?: string;
  scheme?: string;
  header: AwsAppmeshRouteArgsspecHttp2Routematchheader;
  path: AwsAppmeshRouteArgsspecHttp2Routematchpath;
  query_parameter: AwsAppmeshRouteArgsspecHttp2RoutematchQueryParameter;
}
export interface AwsAppmeshRouteArgsspecHttp2RouteRetryPolicyPerRetryTimeout {
  unit: string;
  value: number;
}
export interface AwsAppmeshRouteArgsspecHttp2RouteRetryPolicy {
  http_retry_events?: string[];
  max_retries: number;
  tcp_retry_events?: string[];
  per_retry_timeout: AwsAppmeshRouteArgsspecHttp2RouteRetryPolicyPerRetryTimeout;
}
export interface AwsAppmeshRouteArgsspecHttp2Routetimeoutidle {
  unit: string;
  value: number;
}
export interface AwsAppmeshRouteArgsspecHttp2RoutetimeoutPerRequest {
  unit: string;
  value: number;
}
export interface AwsAppmeshRouteArgsspecHttp2Routetimeout {
  idle: AwsAppmeshRouteArgsspecHttp2Routetimeoutidle;
  per_request: AwsAppmeshRouteArgsspecHttp2RoutetimeoutPerRequest;
}
export interface AwsAppmeshRouteArgsspecHttp2Route {
  action: AwsAppmeshRouteArgsspecHttp2Routeaction;
  match: AwsAppmeshRouteArgsspecHttp2Routematch;
  retry_policy: AwsAppmeshRouteArgsspecHttp2RouteRetryPolicy;
  timeout: AwsAppmeshRouteArgsspecHttp2Routetimeout;
}
export interface AwsAppmeshRouteArgsspecHttpRouteactionWeightedTarget {
  virtual_node: string;
  weight: number;
}
export interface AwsAppmeshRouteArgsspecHttpRouteaction {
  weighted_target: AwsAppmeshRouteArgsspecHttpRouteactionWeightedTarget;
}
export interface AwsAppmeshRouteArgsspecHttpRoutematchheadermatchrange {
  end: number;
  start: number;
}
export interface AwsAppmeshRouteArgsspecHttpRoutematchheadermatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range: AwsAppmeshRouteArgsspecHttpRoutematchheadermatchrange;
}
export interface AwsAppmeshRouteArgsspecHttpRoutematchheader {
  invert?: boolean;
  name: string;
  match: AwsAppmeshRouteArgsspecHttpRoutematchheadermatch;
}
export interface AwsAppmeshRouteArgsspecHttpRoutematchpath {
  exact?: string;
  regex?: string;
}
export interface AwsAppmeshRouteArgsspecHttpRoutematchQueryParametermatch {
  exact?: string;
}
export interface AwsAppmeshRouteArgsspecHttpRoutematchQueryParameter {
  name: string;
  match: AwsAppmeshRouteArgsspecHttpRoutematchQueryParametermatch;
}
export interface AwsAppmeshRouteArgsspecHttpRoutematch {
  method?: string;
  port?: number;
  prefix?: string;
  scheme?: string;
  header: AwsAppmeshRouteArgsspecHttpRoutematchheader;
  path: AwsAppmeshRouteArgsspecHttpRoutematchpath;
  query_parameter: AwsAppmeshRouteArgsspecHttpRoutematchQueryParameter;
}
export interface AwsAppmeshRouteArgsspecHttpRouteRetryPolicyPerRetryTimeout {
  unit: string;
  value: number;
}
export interface AwsAppmeshRouteArgsspecHttpRouteRetryPolicy {
  http_retry_events?: string[];
  max_retries: number;
  tcp_retry_events?: string[];
  per_retry_timeout: AwsAppmeshRouteArgsspecHttpRouteRetryPolicyPerRetryTimeout;
}
export interface AwsAppmeshRouteArgsspecHttpRoutetimeoutidle {
  unit: string;
  value: number;
}
export interface AwsAppmeshRouteArgsspecHttpRoutetimeoutPerRequest {
  unit: string;
  value: number;
}
export interface AwsAppmeshRouteArgsspecHttpRoutetimeout {
  idle: AwsAppmeshRouteArgsspecHttpRoutetimeoutidle;
  per_request: AwsAppmeshRouteArgsspecHttpRoutetimeoutPerRequest;
}
export interface AwsAppmeshRouteArgsspecHttpRoute {
  action: AwsAppmeshRouteArgsspecHttpRouteaction;
  match: AwsAppmeshRouteArgsspecHttpRoutematch;
  retry_policy: AwsAppmeshRouteArgsspecHttpRouteRetryPolicy;
  timeout: AwsAppmeshRouteArgsspecHttpRoutetimeout;
}
export interface AwsAppmeshRouteArgsspecTcpRouteactionWeightedTarget {
  virtual_node: string;
  weight: number;
}
export interface AwsAppmeshRouteArgsspecTcpRouteaction {
  weighted_target: AwsAppmeshRouteArgsspecTcpRouteactionWeightedTarget;
}
export interface AwsAppmeshRouteArgsspecTcpRoutematch {
  port?: number;
}
export interface AwsAppmeshRouteArgsspecTcpRoutetimeoutidle {
  unit: string;
  value: number;
}
export interface AwsAppmeshRouteArgsspecTcpRoutetimeout {
  idle: AwsAppmeshRouteArgsspecTcpRoutetimeoutidle;
}
export interface AwsAppmeshRouteArgsspecTcpRoute {
  action: AwsAppmeshRouteArgsspecTcpRouteaction;
  match: AwsAppmeshRouteArgsspecTcpRoutematch;
  timeout: AwsAppmeshRouteArgsspecTcpRoutetimeout;
}
export interface AwsAppmeshRouteArgsspec {
  priority?: number;
  grpc_route: AwsAppmeshRouteArgsspecGrpcRoute;
  http2_route: AwsAppmeshRouteArgsspecHttp2Route;
  http_route: AwsAppmeshRouteArgsspecHttpRoute;
  tcp_route: AwsAppmeshRouteArgsspecTcpRoute;
}
export interface AwsAppmeshRouteArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  virtual_router_name: string;
  spec: AwsAppmeshRouteArgsspec;
}
export class aws_appmesh_route extends TerraformResource {
  readonly arn!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  readonly mesh_owner?: string;
  readonly resource_owner!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppmeshRouteArgs) {
    super(config, "resource", args, resourceName, "aws_appmesh_route");
  }
}