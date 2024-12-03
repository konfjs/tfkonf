import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAppmeshGatewayRouteArgsSpecGrpcRouteActionTargetVirtualService {
  virtual_service_name: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecGrpcRouteActionTarget {
  port?: number;
  virtual_service: AwsAppmeshGatewayRouteArgsSpecGrpcRouteActionTargetVirtualService;
}
export interface AwsAppmeshGatewayRouteArgsSpecGrpcRouteAction {
  target: AwsAppmeshGatewayRouteArgsSpecGrpcRouteActionTarget;
}
export interface AwsAppmeshGatewayRouteArgsSpecGrpcRouteMatch {
  port?: number;
  service_name: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecGrpcRoute {
  action: AwsAppmeshGatewayRouteArgsSpecGrpcRouteAction;
  match: AwsAppmeshGatewayRouteArgsSpecGrpcRouteMatch;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewriteHostname {
  default_target_hostname: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewritePath {
  exact: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewritePrefix {
  default_prefix?: string;
  value?: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewrite {
  hostname: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewriteHostname;
  path: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewritePath;
  prefix: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewritePrefix;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionTargetVirtualService {
  virtual_service_name: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionTarget {
  port?: number;
  virtual_service: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionTargetVirtualService;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteAction {
  rewrite: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionRewrite;
  target: AwsAppmeshGatewayRouteArgsSpecHttp2RouteActionTarget;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeaderMatchRange {
  end: number;
  start: number;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeaderMatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeaderMatchRange;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeader {
  invert?: boolean;
  name: string;
  match: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeaderMatch;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHostname {
  exact?: string;
  suffix?: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchPath {
  exact?: string;
  regex?: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchQueryParameterMatch {
  exact?: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchQueryParameter {
  name: string;
  match: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchQueryParameterMatch;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatch {
  port?: number;
  prefix?: string;
  header: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHeader;
  hostname: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchHostname;
  path: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchPath;
  query_parameter: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatchQueryParameter;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttp2Route {
  action: AwsAppmeshGatewayRouteArgsSpecHttp2RouteAction;
  match: AwsAppmeshGatewayRouteArgsSpecHttp2RouteMatch;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewriteHostname {
  default_target_hostname: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewritePath {
  exact: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewritePrefix {
  default_prefix?: string;
  value?: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewrite {
  hostname: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewriteHostname;
  path: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewritePath;
  prefix: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewritePrefix;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionTargetVirtualService {
  virtual_service_name: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteActionTarget {
  port?: number;
  virtual_service: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionTargetVirtualService;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteAction {
  rewrite: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionRewrite;
  target: AwsAppmeshGatewayRouteArgsSpecHttpRouteActionTarget;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeaderMatchRange {
  end: number;
  start: number;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeaderMatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeaderMatchRange;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeader {
  invert?: boolean;
  name: string;
  match: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeaderMatch;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHostname {
  exact?: string;
  suffix?: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchPath {
  exact?: string;
  regex?: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchQueryParameterMatch {
  exact?: string;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchQueryParameter {
  name: string;
  match: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchQueryParameterMatch;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRouteMatch {
  port?: number;
  prefix?: string;
  header: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHeader;
  hostname: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchHostname;
  path: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchPath;
  query_parameter: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatchQueryParameter;
}
export interface AwsAppmeshGatewayRouteArgsSpecHttpRoute {
  action: AwsAppmeshGatewayRouteArgsSpecHttpRouteAction;
  match: AwsAppmeshGatewayRouteArgsSpecHttpRouteMatch;
}
export interface AwsAppmeshGatewayRouteArgsSpec {
  priority?: number;
  grpc_route: AwsAppmeshGatewayRouteArgsSpecGrpcRoute;
  http2_route: AwsAppmeshGatewayRouteArgsSpecHttp2Route;
  http_route: AwsAppmeshGatewayRouteArgsSpecHttpRoute;
}
export interface AwsAppmeshGatewayRouteArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  virtual_gateway_name: string;
  spec: AwsAppmeshGatewayRouteArgsSpec;
}
export class aws_appmesh_gateway_route extends TerraformResource {
  readonly arn!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  readonly mesh_owner?: string;
  readonly resource_owner!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppmeshGatewayRouteArgs) {
    super(config, "resource", args, resourceName, "aws_appmesh_gateway_route");
  }
}