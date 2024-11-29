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
export interface ConnectionPool {
  grpc: Grpc;
  http: Http;
  http2: Http2;
}
export interface HealthCheck {
  healthy_threshold: number;
  interval_millis: number;
  path?: string;
  protocol: string;
  timeout_millis: number;
  unhealthy_threshold: number;
}
export interface PortMapping {
  port: number;
  protocol: string;
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
  port_mapping: PortMapping;
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
export interface Spec {
  backend_defaults: BackendDefaults;
  listener: Listener;
  logging: Logging;
}
export interface AwsAppmeshVirtualGatewayArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: Spec;
}
export class aws_appmesh_virtual_gateway extends TerraformResource {
  readonly arn!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  readonly mesh_owner?: string;
  readonly resource_owner!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppmeshVirtualGatewayArgs) {
    super(config, "resource", args, resourceName, "aws_appmesh_virtual_gateway");
  }
}