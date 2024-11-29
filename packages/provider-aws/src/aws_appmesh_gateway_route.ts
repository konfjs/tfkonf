import { TerraformConfig, TerraformResource } from "tfs";
export interface VirtualService {
  virtual_service_name: string;
}
export interface Target {
  port?: number;
  virtual_service: VirtualService;
}
export interface Action {
  target: Target;
}
export interface Match {
  port?: number;
  service_name: string;
}
export interface GrpcRoute {
  action: Action;
  match: Match;
}
export interface Hostname {
  default_target_hostname: string;
}
export interface Path {
  exact: string;
}
export interface Prefix {
  default_prefix?: string;
  value?: string;
}
export interface Rewrite {
  hostname: Hostname;
  path: Path;
  prefix: Prefix;
}
export interface VirtualService {
  virtual_service_name: string;
}
export interface Target {
  port?: number;
  virtual_service: VirtualService;
}
export interface Action {
  rewrite: Rewrite;
  target: Target;
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
export interface Hostname {
  exact?: string;
  suffix?: string;
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
  port?: number;
  prefix?: string;
  header: Header;
  hostname: Hostname;
  path: Path;
  query_parameter: QueryParameter;
}
export interface Http2Route {
  action: Action;
  match: Match;
}
export interface Hostname {
  default_target_hostname: string;
}
export interface Path {
  exact: string;
}
export interface Prefix {
  default_prefix?: string;
  value?: string;
}
export interface Rewrite {
  hostname: Hostname;
  path: Path;
  prefix: Prefix;
}
export interface VirtualService {
  virtual_service_name: string;
}
export interface Target {
  port?: number;
  virtual_service: VirtualService;
}
export interface Action {
  rewrite: Rewrite;
  target: Target;
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
export interface Hostname {
  exact?: string;
  suffix?: string;
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
  port?: number;
  prefix?: string;
  header: Header;
  hostname: Hostname;
  path: Path;
  query_parameter: QueryParameter;
}
export interface HttpRoute {
  action: Action;
  match: Match;
}
export interface Spec {
  priority?: number;
  grpc_route: GrpcRoute;
  http2_route: Http2Route;
  http_route: HttpRoute;
}
export interface AwsAppmeshGatewayRouteArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  virtual_gateway_name: string;
  spec: Spec;
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