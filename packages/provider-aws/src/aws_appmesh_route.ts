import { TerraformConfig, TerraformResource } from "tfs";
export interface WeightedTarget {
  virtual_node: string;
  weight: number;
}
export interface Action {
  weighted_target: WeightedTarget;
}
export interface Range {
  end: number;
  start: number;
}
export interface Match {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range: Range;
}
export interface Metadata {
  invert?: boolean;
  name: string;
  match: Match;
}
export interface Match {
  method_name?: string;
  port?: number;
  prefix?: string;
  service_name?: string;
  metadata: Metadata;
}
export interface PerRetryTimeout {
  unit: string;
  value: number;
}
export interface RetryPolicy {
  grpc_retry_events?: string[];
  http_retry_events?: string[];
  max_retries: number;
  tcp_retry_events?: string[];
  per_retry_timeout: PerRetryTimeout;
}
export interface Idle {
  unit: string;
  value: number;
}
export interface PerRequest {
  unit: string;
  value: number;
}
export interface Timeout {
  idle: Idle;
  per_request: PerRequest;
}
export interface GrpcRoute {
  action: Action;
  match: Match;
  retry_policy: RetryPolicy;
  timeout: Timeout;
}
export interface WeightedTarget {
  virtual_node: string;
  weight: number;
}
export interface Action {
  weighted_target: WeightedTarget;
}
export interface Range {
  end: number;
  start: number;
}
export interface Match {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range: Range;
}
export interface Header {
  invert?: boolean;
  name: string;
  match: Match;
}
export interface Path {
  exact?: string;
  regex?: string;
}
export interface Match {
  exact?: string;
}
export interface QueryParameter {
  name: string;
  match: Match;
}
export interface Match {
  method?: string;
  port?: number;
  prefix?: string;
  scheme?: string;
  header: Header;
  path: Path;
  query_parameter: QueryParameter;
}
export interface PerRetryTimeout {
  unit: string;
  value: number;
}
export interface RetryPolicy {
  http_retry_events?: string[];
  max_retries: number;
  tcp_retry_events?: string[];
  per_retry_timeout: PerRetryTimeout;
}
export interface Idle {
  unit: string;
  value: number;
}
export interface PerRequest {
  unit: string;
  value: number;
}
export interface Timeout {
  idle: Idle;
  per_request: PerRequest;
}
export interface Http2Route {
  action: Action;
  match: Match;
  retry_policy: RetryPolicy;
  timeout: Timeout;
}
export interface WeightedTarget {
  virtual_node: string;
  weight: number;
}
export interface Action {
  weighted_target: WeightedTarget;
}
export interface Range {
  end: number;
  start: number;
}
export interface Match {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range: Range;
}
export interface Header {
  invert?: boolean;
  name: string;
  match: Match;
}
export interface Path {
  exact?: string;
  regex?: string;
}
export interface Match {
  exact?: string;
}
export interface QueryParameter {
  name: string;
  match: Match;
}
export interface Match {
  method?: string;
  port?: number;
  prefix?: string;
  scheme?: string;
  header: Header;
  path: Path;
  query_parameter: QueryParameter;
}
export interface PerRetryTimeout {
  unit: string;
  value: number;
}
export interface RetryPolicy {
  http_retry_events?: string[];
  max_retries: number;
  tcp_retry_events?: string[];
  per_retry_timeout: PerRetryTimeout;
}
export interface Idle {
  unit: string;
  value: number;
}
export interface PerRequest {
  unit: string;
  value: number;
}
export interface Timeout {
  idle: Idle;
  per_request: PerRequest;
}
export interface HttpRoute {
  action: Action;
  match: Match;
  retry_policy: RetryPolicy;
  timeout: Timeout;
}
export interface WeightedTarget {
  virtual_node: string;
  weight: number;
}
export interface Action {
  weighted_target: WeightedTarget;
}
export interface Match {
  port?: number;
}
export interface Idle {
  unit: string;
  value: number;
}
export interface Timeout {
  idle: Idle;
}
export interface TcpRoute {
  action: Action;
  match: Match;
  timeout: Timeout;
}
export interface Spec {
  priority?: number;
  grpc_route: GrpcRoute;
  http2_route: Http2Route;
  http_route: HttpRoute;
  tcp_route: TcpRoute;
}
export interface AwsAppmeshRouteArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  virtual_router_name: string;
  spec: Spec;
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