import { TerraformConfig, TerraformResource } from "tfs";
export interface File {
  certificate_chain: string;
  private_key: string;
}
export interface Sds {
  secret_name: string;
}
export interface Certificate {
  file: File;
  sds: Sds;
}
export interface Match {
  exact: string[];
}
export interface SubjectAlternativeNames {
  match: Match;
}
export interface Acm {
  certificate_authority_arns: string[];
}
export interface File {
  certificate_chain: string;
}
export interface Sds {
  secret_name: string;
}
export interface Trust {
  acm: Acm;
  file: File;
  sds: Sds;
}
export interface Validation {
  subject_alternative_names: SubjectAlternativeNames;
  trust: Trust;
}
export interface Tls {
  enforce?: boolean;
  ports?: number[];
  certificate: Certificate;
  validation: Validation;
}
export interface ClientPolicy {
  tls: Tls;
}
export interface VirtualService {
  virtual_service_name: string;
  client_policy: ClientPolicy;
}
export interface Backend {
  virtual_service: VirtualService;
}
export interface File {
  certificate_chain: string;
  private_key: string;
}
export interface Sds {
  secret_name: string;
}
export interface Certificate {
  file: File;
  sds: Sds;
}
export interface Match {
  exact: string[];
}
export interface SubjectAlternativeNames {
  match: Match;
}
export interface Acm {
  certificate_authority_arns: string[];
}
export interface File {
  certificate_chain: string;
}
export interface Sds {
  secret_name: string;
}
export interface Trust {
  acm: Acm;
  file: File;
  sds: Sds;
}
export interface Validation {
  subject_alternative_names: SubjectAlternativeNames;
  trust: Trust;
}
export interface Tls {
  enforce?: boolean;
  ports?: number[];
  certificate: Certificate;
  validation: Validation;
}
export interface ClientPolicy {
  tls: Tls;
}
export interface BackendDefaults {
  client_policy: ClientPolicy;
}
export interface Grpc {
  max_requests: number;
}
export interface Http {
  max_connections: number;
  max_pending_requests?: number;
}
export interface Http2 {
  max_requests: number;
}
export interface Tcp {
  max_connections: number;
}
export interface ConnectionPool {
  grpc: Grpc;
  http: Http;
  http2: Http2;
  tcp: Tcp;
}
export interface HealthCheck {
  healthy_threshold: number;
  interval_millis: number;
  path?: string;
  protocol: string;
  timeout_millis: number;
  unhealthy_threshold: number;
}
export interface BaseEjectionDuration {
  unit: string;
  value: number;
}
export interface Interval {
  unit: string;
  value: number;
}
export interface OutlierDetection {
  max_ejection_percent: number;
  max_server_errors: number;
  base_ejection_duration: BaseEjectionDuration;
  interval: Interval;
}
export interface PortMapping {
  port: number;
  protocol: string;
}
export interface Idle {
  unit: string;
  value: number;
}
export interface PerRequest {
  unit: string;
  value: number;
}
export interface Grpc {
  idle: Idle;
  per_request: PerRequest;
}
export interface Idle {
  unit: string;
  value: number;
}
export interface PerRequest {
  unit: string;
  value: number;
}
export interface Http {
  idle: Idle;
  per_request: PerRequest;
}
export interface Idle {
  unit: string;
  value: number;
}
export interface PerRequest {
  unit: string;
  value: number;
}
export interface Http2 {
  idle: Idle;
  per_request: PerRequest;
}
export interface Idle {
  unit: string;
  value: number;
}
export interface Tcp {
  idle: Idle;
}
export interface Timeout {
  grpc: Grpc;
  http: Http;
  http2: Http2;
  tcp: Tcp;
}
export interface Acm {
  certificate_arn: string;
}
export interface File {
  certificate_chain: string;
  private_key: string;
}
export interface Sds {
  secret_name: string;
}
export interface Certificate {
  acm: Acm;
  file: File;
  sds: Sds;
}
export interface Match {
  exact: string[];
}
export interface SubjectAlternativeNames {
  match: Match;
}
export interface File {
  certificate_chain: string;
}
export interface Sds {
  secret_name: string;
}
export interface Trust {
  file: File;
  sds: Sds;
}
export interface Validation {
  subject_alternative_names: SubjectAlternativeNames;
  trust: Trust;
}
export interface Tls {
  mode: string;
  certificate: Certificate;
  validation: Validation;
}
export interface Listener {
  connection_pool: ConnectionPool;
  health_check: HealthCheck;
  outlier_detection: OutlierDetection;
  port_mapping: PortMapping;
  timeout: Timeout;
  tls: Tls;
}
export interface Json {
  key: string;
  value: string;
}
export interface Format {
  text?: string;
  json: Json;
}
export interface File {
  path: string;
  format: Format;
}
export interface AccessLog {
  file: File;
}
export interface Logging {
  access_log: AccessLog;
}
export interface AwsCloudMap {
  attributes?: {
    [key: string]: string;
  };
  namespace_name: string;
  service_name: string;
}
export interface Dns {
  hostname: string;
  ip_preference?: string;
  response_type?: string;
}
export interface ServiceDiscovery {
  aws_cloud_map: AwsCloudMap;
  dns: Dns;
}
export interface Spec {
  backend: Backend;
  backend_defaults: BackendDefaults;
  listener: Listener;
  logging: Logging;
  service_discovery: ServiceDiscovery;
}
export interface AwsAppmeshVirtualNodeArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: Spec;
}
export class aws_appmesh_virtual_node extends TerraformResource {
  readonly arn!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  readonly mesh_owner?: string;
  readonly resource_owner!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppmeshVirtualNodeArgs) {
    super(config, "resource", args, resourceName, "aws_appmesh_virtual_node");
  }
}