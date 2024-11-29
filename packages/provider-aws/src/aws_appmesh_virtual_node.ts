import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlscertificatefile {
  certificate_chain: string;
  private_key: string;
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlscertificatesds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlscertificate {
  file: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlscertificatefile;
  sds: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlscertificatesds;
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationSubjectAlternativeNamesmatch {
  exact: string[];
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationSubjectAlternativeNamesmatch;
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationtrustacm {
  certificate_authority_arns: string[];
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationtrustfile {
  certificate_chain: string;
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationtrustsds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationtrust {
  acm: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationtrustacm;
  file: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationtrustfile;
  sds: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationtrustsds;
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidation {
  subject_alternative_names: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidationtrust;
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytls {
  enforce?: boolean;
  ports?: number[];
  certificate: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlscertificate;
  validation: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytlsvalidation;
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicy {
  tls: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicytls;
}
export interface AwsAppmeshVirtualNodeArgsspecbackendVirtualService {
  virtual_service_name: string;
  client_policy: AwsAppmeshVirtualNodeArgsspecbackendVirtualServiceClientPolicy;
}
export interface AwsAppmeshVirtualNodeArgsspecbackend {
  virtual_service: AwsAppmeshVirtualNodeArgsspecbackendVirtualService;
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlscertificatefile {
  certificate_chain: string;
  private_key: string;
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlscertificatesds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlscertificate {
  file: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlscertificatefile;
  sds: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlscertificatesds;
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationSubjectAlternativeNamesmatch {
  exact: string[];
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationSubjectAlternativeNamesmatch;
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationtrustacm {
  certificate_authority_arns: string[];
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationtrustfile {
  certificate_chain: string;
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationtrustsds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationtrust {
  acm: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationtrustacm;
  file: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationtrustfile;
  sds: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationtrustsds;
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidation {
  subject_alternative_names: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidationtrust;
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytls {
  enforce?: boolean;
  ports?: number[];
  certificate: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlscertificate;
  validation: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytlsvalidation;
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicy {
  tls: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicytls;
}
export interface AwsAppmeshVirtualNodeArgsspecBackendDefaults {
  client_policy: AwsAppmeshVirtualNodeArgsspecBackendDefaultsClientPolicy;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenerConnectionPoolgrpc {
  max_requests: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenerConnectionPoolhttp {
  max_connections: number;
  max_pending_requests?: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenerConnectionPoolhttp2 {
  max_requests: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenerConnectionPooltcp {
  max_connections: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenerConnectionPool {
  grpc: AwsAppmeshVirtualNodeArgsspeclistenerConnectionPoolgrpc;
  http: AwsAppmeshVirtualNodeArgsspeclistenerConnectionPoolhttp;
  http2: AwsAppmeshVirtualNodeArgsspeclistenerConnectionPoolhttp2;
  tcp: AwsAppmeshVirtualNodeArgsspeclistenerConnectionPooltcp;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenerHealthCheck {
  healthy_threshold: number;
  interval_millis: number;
  path?: string;
  protocol: string;
  timeout_millis: number;
  unhealthy_threshold: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenerOutlierDetectionBaseEjectionDuration {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenerOutlierDetectioninterval {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenerOutlierDetection {
  max_ejection_percent: number;
  max_server_errors: number;
  base_ejection_duration: AwsAppmeshVirtualNodeArgsspeclistenerOutlierDetectionBaseEjectionDuration;
  interval: AwsAppmeshVirtualNodeArgsspeclistenerOutlierDetectioninterval;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenerPortMapping {
  port: number;
  protocol: string;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeoutgrpcidle {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeoutgrpcPerRequest {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeoutgrpc {
  idle: AwsAppmeshVirtualNodeArgsspeclistenertimeoutgrpcidle;
  per_request: AwsAppmeshVirtualNodeArgsspeclistenertimeoutgrpcPerRequest;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeouthttpidle {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeouthttpPerRequest {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeouthttp {
  idle: AwsAppmeshVirtualNodeArgsspeclistenertimeouthttpidle;
  per_request: AwsAppmeshVirtualNodeArgsspeclistenertimeouthttpPerRequest;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeouthttp2idle {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeouthttp2PerRequest {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeouthttp2 {
  idle: AwsAppmeshVirtualNodeArgsspeclistenertimeouthttp2idle;
  per_request: AwsAppmeshVirtualNodeArgsspeclistenertimeouthttp2PerRequest;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeouttcpidle {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeouttcp {
  idle: AwsAppmeshVirtualNodeArgsspeclistenertimeouttcpidle;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertimeout {
  grpc: AwsAppmeshVirtualNodeArgsspeclistenertimeoutgrpc;
  http: AwsAppmeshVirtualNodeArgsspeclistenertimeouthttp;
  http2: AwsAppmeshVirtualNodeArgsspeclistenertimeouthttp2;
  tcp: AwsAppmeshVirtualNodeArgsspeclistenertimeouttcp;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertlscertificateacm {
  certificate_arn: string;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertlscertificatefile {
  certificate_chain: string;
  private_key: string;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertlscertificatesds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertlscertificate {
  acm: AwsAppmeshVirtualNodeArgsspeclistenertlscertificateacm;
  file: AwsAppmeshVirtualNodeArgsspeclistenertlscertificatefile;
  sds: AwsAppmeshVirtualNodeArgsspeclistenertlscertificatesds;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertlsvalidationSubjectAlternativeNamesmatch {
  exact: string[];
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertlsvalidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualNodeArgsspeclistenertlsvalidationSubjectAlternativeNamesmatch;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertlsvalidationtrustfile {
  certificate_chain: string;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertlsvalidationtrustsds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertlsvalidationtrust {
  file: AwsAppmeshVirtualNodeArgsspeclistenertlsvalidationtrustfile;
  sds: AwsAppmeshVirtualNodeArgsspeclistenertlsvalidationtrustsds;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertlsvalidation {
  subject_alternative_names: AwsAppmeshVirtualNodeArgsspeclistenertlsvalidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualNodeArgsspeclistenertlsvalidationtrust;
}
export interface AwsAppmeshVirtualNodeArgsspeclistenertls {
  mode: string;
  certificate: AwsAppmeshVirtualNodeArgsspeclistenertlscertificate;
  validation: AwsAppmeshVirtualNodeArgsspeclistenertlsvalidation;
}
export interface AwsAppmeshVirtualNodeArgsspeclistener {
  connection_pool: AwsAppmeshVirtualNodeArgsspeclistenerConnectionPool;
  health_check: AwsAppmeshVirtualNodeArgsspeclistenerHealthCheck;
  outlier_detection: AwsAppmeshVirtualNodeArgsspeclistenerOutlierDetection;
  port_mapping: AwsAppmeshVirtualNodeArgsspeclistenerPortMapping;
  timeout: AwsAppmeshVirtualNodeArgsspeclistenertimeout;
  tls: AwsAppmeshVirtualNodeArgsspeclistenertls;
}
export interface AwsAppmeshVirtualNodeArgsspecloggingAccessLogfileformatjson {
  key: string;
  value: string;
}
export interface AwsAppmeshVirtualNodeArgsspecloggingAccessLogfileformat {
  text?: string;
  json: AwsAppmeshVirtualNodeArgsspecloggingAccessLogfileformatjson;
}
export interface AwsAppmeshVirtualNodeArgsspecloggingAccessLogfile {
  path: string;
  format: AwsAppmeshVirtualNodeArgsspecloggingAccessLogfileformat;
}
export interface AwsAppmeshVirtualNodeArgsspecloggingAccessLog {
  file: AwsAppmeshVirtualNodeArgsspecloggingAccessLogfile;
}
export interface AwsAppmeshVirtualNodeArgsspeclogging {
  access_log: AwsAppmeshVirtualNodeArgsspecloggingAccessLog;
}
export interface AwsAppmeshVirtualNodeArgsspecServiceDiscoveryAwsCloudMap {
  attributes?: {
    [key: string]: string;
  };
  namespace_name: string;
  service_name: string;
}
export interface AwsAppmeshVirtualNodeArgsspecServiceDiscoverydns {
  hostname: string;
  ip_preference?: string;
  response_type?: string;
}
export interface AwsAppmeshVirtualNodeArgsspecServiceDiscovery {
  aws_cloud_map: AwsAppmeshVirtualNodeArgsspecServiceDiscoveryAwsCloudMap;
  dns: AwsAppmeshVirtualNodeArgsspecServiceDiscoverydns;
}
export interface AwsAppmeshVirtualNodeArgsspec {
  backend: AwsAppmeshVirtualNodeArgsspecbackend;
  backend_defaults: AwsAppmeshVirtualNodeArgsspecBackendDefaults;
  listener: AwsAppmeshVirtualNodeArgsspeclistener;
  logging: AwsAppmeshVirtualNodeArgsspeclogging;
  service_discovery: AwsAppmeshVirtualNodeArgsspecServiceDiscovery;
}
export interface AwsAppmeshVirtualNodeArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: AwsAppmeshVirtualNodeArgsspec;
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