import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppmeshGatewayRouteArgsspecGrpcRouteactiontargetVirtualService {
  virtual_service_name: string;
}
export interface AwsAppmeshGatewayRouteArgsspecGrpcRouteactiontarget {
  port?: number;
  virtual_service: AwsAppmeshGatewayRouteArgsspecGrpcRouteactiontargetVirtualService;
}
export interface AwsAppmeshGatewayRouteArgsspecGrpcRouteaction {
  target: AwsAppmeshGatewayRouteArgsspecGrpcRouteactiontarget;
}
export interface AwsAppmeshGatewayRouteArgsspecGrpcRoutematch {
  port?: number;
  service_name: string;
}
export interface AwsAppmeshGatewayRouteArgsspecGrpcRoute {
  action: AwsAppmeshGatewayRouteArgsspecGrpcRouteaction;
  match: AwsAppmeshGatewayRouteArgsspecGrpcRoutematch;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routeactionrewritehostname {
  default_target_hostname: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routeactionrewritepath {
  exact: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routeactionrewriteprefix {
  default_prefix?: string;
  value?: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routeactionrewrite {
  hostname: AwsAppmeshGatewayRouteArgsspecHttp2Routeactionrewritehostname;
  path: AwsAppmeshGatewayRouteArgsspecHttp2Routeactionrewritepath;
  prefix: AwsAppmeshGatewayRouteArgsspecHttp2Routeactionrewriteprefix;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2RouteactiontargetVirtualService {
  virtual_service_name: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routeactiontarget {
  port?: number;
  virtual_service: AwsAppmeshGatewayRouteArgsspecHttp2RouteactiontargetVirtualService;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routeaction {
  rewrite: AwsAppmeshGatewayRouteArgsspecHttp2Routeactionrewrite;
  target: AwsAppmeshGatewayRouteArgsspecHttp2Routeactiontarget;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routematchheadermatchrange {
  end: number;
  start: number;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routematchheadermatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range: AwsAppmeshGatewayRouteArgsspecHttp2Routematchheadermatchrange;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routematchheader {
  invert?: boolean;
  name: string;
  match: AwsAppmeshGatewayRouteArgsspecHttp2Routematchheadermatch;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routematchhostname {
  exact?: string;
  suffix?: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routematchpath {
  exact?: string;
  regex?: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2RoutematchQueryParametermatch {
  exact?: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2RoutematchQueryParameter {
  name: string;
  match: AwsAppmeshGatewayRouteArgsspecHttp2RoutematchQueryParametermatch;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Routematch {
  port?: number;
  prefix?: string;
  header: AwsAppmeshGatewayRouteArgsspecHttp2Routematchheader;
  hostname: AwsAppmeshGatewayRouteArgsspecHttp2Routematchhostname;
  path: AwsAppmeshGatewayRouteArgsspecHttp2Routematchpath;
  query_parameter: AwsAppmeshGatewayRouteArgsspecHttp2RoutematchQueryParameter;
}
export interface AwsAppmeshGatewayRouteArgsspecHttp2Route {
  action: AwsAppmeshGatewayRouteArgsspecHttp2Routeaction;
  match: AwsAppmeshGatewayRouteArgsspecHttp2Routematch;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRouteactionrewritehostname {
  default_target_hostname: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRouteactionrewritepath {
  exact: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRouteactionrewriteprefix {
  default_prefix?: string;
  value?: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRouteactionrewrite {
  hostname: AwsAppmeshGatewayRouteArgsspecHttpRouteactionrewritehostname;
  path: AwsAppmeshGatewayRouteArgsspecHttpRouteactionrewritepath;
  prefix: AwsAppmeshGatewayRouteArgsspecHttpRouteactionrewriteprefix;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRouteactiontargetVirtualService {
  virtual_service_name: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRouteactiontarget {
  port?: number;
  virtual_service: AwsAppmeshGatewayRouteArgsspecHttpRouteactiontargetVirtualService;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRouteaction {
  rewrite: AwsAppmeshGatewayRouteArgsspecHttpRouteactionrewrite;
  target: AwsAppmeshGatewayRouteArgsspecHttpRouteactiontarget;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRoutematchheadermatchrange {
  end: number;
  start: number;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRoutematchheadermatch {
  exact?: string;
  prefix?: string;
  regex?: string;
  suffix?: string;
  range: AwsAppmeshGatewayRouteArgsspecHttpRoutematchheadermatchrange;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRoutematchheader {
  invert?: boolean;
  name: string;
  match: AwsAppmeshGatewayRouteArgsspecHttpRoutematchheadermatch;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRoutematchhostname {
  exact?: string;
  suffix?: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRoutematchpath {
  exact?: string;
  regex?: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRoutematchQueryParametermatch {
  exact?: string;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRoutematchQueryParameter {
  name: string;
  match: AwsAppmeshGatewayRouteArgsspecHttpRoutematchQueryParametermatch;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRoutematch {
  port?: number;
  prefix?: string;
  header: AwsAppmeshGatewayRouteArgsspecHttpRoutematchheader;
  hostname: AwsAppmeshGatewayRouteArgsspecHttpRoutematchhostname;
  path: AwsAppmeshGatewayRouteArgsspecHttpRoutematchpath;
  query_parameter: AwsAppmeshGatewayRouteArgsspecHttpRoutematchQueryParameter;
}
export interface AwsAppmeshGatewayRouteArgsspecHttpRoute {
  action: AwsAppmeshGatewayRouteArgsspecHttpRouteaction;
  match: AwsAppmeshGatewayRouteArgsspecHttpRoutematch;
}
export interface AwsAppmeshGatewayRouteArgsspec {
  priority?: number;
  grpc_route: AwsAppmeshGatewayRouteArgsspecGrpcRoute;
  http2_route: AwsAppmeshGatewayRouteArgsspecHttp2Route;
  http_route: AwsAppmeshGatewayRouteArgsspecHttpRoute;
}
export interface AwsAppmeshGatewayRouteArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  virtual_gateway_name: string;
  spec: AwsAppmeshGatewayRouteArgsspec;
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