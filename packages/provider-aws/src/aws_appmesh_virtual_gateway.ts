import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlscertificatefile {
  certificate_chain: string;
  private_key: string;
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlscertificatesds {
  secret_name: string;
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlscertificate {
  file: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlscertificatefile;
  sds: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlscertificatesds;
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationSubjectAlternativeNamesmatch {
  exact: string[];
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationSubjectAlternativeNamesmatch;
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationtrustacm {
  certificate_authority_arns: string[];
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationtrustfile {
  certificate_chain: string;
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationtrustsds {
  secret_name: string;
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationtrust {
  acm: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationtrustacm;
  file: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationtrustfile;
  sds: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationtrustsds;
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidation {
  subject_alternative_names: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidationtrust;
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytls {
  enforce?: boolean;
  ports?: number[];
  certificate: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlscertificate;
  validation: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytlsvalidation;
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicy {
  tls: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicytls;
}
export interface AwsAppmeshVirtualGatewayArgsspecBackendDefaults {
  client_policy: AwsAppmeshVirtualGatewayArgsspecBackendDefaultsClientPolicy;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenerConnectionPoolgrpc {
  max_requests: number;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenerConnectionPoolhttp {
  max_connections: number;
  max_pending_requests?: number;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenerConnectionPoolhttp2 {
  max_requests: number;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenerConnectionPool {
  grpc: AwsAppmeshVirtualGatewayArgsspeclistenerConnectionPoolgrpc;
  http: AwsAppmeshVirtualGatewayArgsspeclistenerConnectionPoolhttp;
  http2: AwsAppmeshVirtualGatewayArgsspeclistenerConnectionPoolhttp2;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenerHealthCheck {
  healthy_threshold: number;
  interval_millis: number;
  path?: string;
  protocol: string;
  timeout_millis: number;
  unhealthy_threshold: number;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenerPortMapping {
  port: number;
  protocol: string;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenertlscertificateacm {
  certificate_arn: string;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenertlscertificatefile {
  certificate_chain: string;
  private_key: string;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenertlscertificatesds {
  secret_name: string;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenertlscertificate {
  acm: AwsAppmeshVirtualGatewayArgsspeclistenertlscertificateacm;
  file: AwsAppmeshVirtualGatewayArgsspeclistenertlscertificatefile;
  sds: AwsAppmeshVirtualGatewayArgsspeclistenertlscertificatesds;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidationSubjectAlternativeNamesmatch {
  exact: string[];
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidationSubjectAlternativeNamesmatch;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidationtrustfile {
  certificate_chain: string;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidationtrustsds {
  secret_name: string;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidationtrust {
  file: AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidationtrustfile;
  sds: AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidationtrustsds;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidation {
  subject_alternative_names: AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidationtrust;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistenertls {
  mode: string;
  certificate: AwsAppmeshVirtualGatewayArgsspeclistenertlscertificate;
  validation: AwsAppmeshVirtualGatewayArgsspeclistenertlsvalidation;
}
export interface AwsAppmeshVirtualGatewayArgsspeclistener {
  connection_pool: AwsAppmeshVirtualGatewayArgsspeclistenerConnectionPool;
  health_check: AwsAppmeshVirtualGatewayArgsspeclistenerHealthCheck;
  port_mapping: AwsAppmeshVirtualGatewayArgsspeclistenerPortMapping;
  tls: AwsAppmeshVirtualGatewayArgsspeclistenertls;
}
export interface AwsAppmeshVirtualGatewayArgsspecloggingAccessLogfileformatjson {
  key: string;
  value: string;
}
export interface AwsAppmeshVirtualGatewayArgsspecloggingAccessLogfileformat {
  text?: string;
  json: AwsAppmeshVirtualGatewayArgsspecloggingAccessLogfileformatjson;
}
export interface AwsAppmeshVirtualGatewayArgsspecloggingAccessLogfile {
  path: string;
  format: AwsAppmeshVirtualGatewayArgsspecloggingAccessLogfileformat;
}
export interface AwsAppmeshVirtualGatewayArgsspecloggingAccessLog {
  file: AwsAppmeshVirtualGatewayArgsspecloggingAccessLogfile;
}
export interface AwsAppmeshVirtualGatewayArgsspeclogging {
  access_log: AwsAppmeshVirtualGatewayArgsspecloggingAccessLog;
}
export interface AwsAppmeshVirtualGatewayArgsspec {
  backend_defaults: AwsAppmeshVirtualGatewayArgsspecBackendDefaults;
  listener: AwsAppmeshVirtualGatewayArgsspeclistener;
  logging: AwsAppmeshVirtualGatewayArgsspeclogging;
}
export interface AwsAppmeshVirtualGatewayArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: AwsAppmeshVirtualGatewayArgsspec;
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