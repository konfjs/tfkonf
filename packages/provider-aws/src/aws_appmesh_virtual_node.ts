import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsCertificateFile {
  certificate_chain: string;
  private_key: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsCertificateSds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsCertificate {
  file: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsCertificateFile;
  sds: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsCertificateSds;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  exact: string[];
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
  certificate_authority_arns: string[];
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
  certificate_chain: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
  acm: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm;
  file: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile;
  sds: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidation {
  subject_alternative_names: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidationTrust;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTls {
  enforce?: boolean;
  ports?: number[];
  certificate: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsCertificate;
  validation: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTlsValidation;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicy {
  tls: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicyTls;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendVirtualService {
  virtual_service_name: string;
  client_policy: AwsAppmeshVirtualNodeArgsSpecBackendVirtualServiceClientPolicy;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackend {
  virtual_service: AwsAppmeshVirtualNodeArgsSpecBackendVirtualService;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsCertificateFile {
  certificate_chain: string;
  private_key: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsCertificateSds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsCertificate {
  file: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsCertificateFile;
  sds: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsCertificateSds;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  exact: string[];
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  certificate_authority_arns: string[];
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  certificate_chain: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationTrust {
  acm: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
  file: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationTrustFile;
  sds: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidation {
  subject_alternative_names: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidationTrust;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTls {
  enforce?: boolean;
  ports?: number[];
  certificate: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsCertificate;
  validation: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTlsValidation;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicy {
  tls: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicyTls;
}
export interface AwsAppmeshVirtualNodeArgsSpecBackendDefaults {
  client_policy: AwsAppmeshVirtualNodeArgsSpecBackendDefaultsClientPolicy;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerConnectionPoolGrpc {
  max_requests: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerConnectionPoolHttp {
  max_connections: number;
  max_pending_requests?: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerConnectionPoolHttp2 {
  max_requests: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerConnectionPoolTcp {
  max_connections: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerConnectionPool {
  grpc: AwsAppmeshVirtualNodeArgsSpecListenerConnectionPoolGrpc;
  http: AwsAppmeshVirtualNodeArgsSpecListenerConnectionPoolHttp;
  http2: AwsAppmeshVirtualNodeArgsSpecListenerConnectionPoolHttp2;
  tcp: AwsAppmeshVirtualNodeArgsSpecListenerConnectionPoolTcp;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerHealthCheck {
  healthy_threshold: number;
  interval_millis: number;
  path?: string;
  protocol: string;
  timeout_millis: number;
  unhealthy_threshold: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerOutlierDetectionBaseEjectionDuration {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerOutlierDetectionInterval {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerOutlierDetection {
  max_ejection_percent: number;
  max_server_errors: number;
  base_ejection_duration: AwsAppmeshVirtualNodeArgsSpecListenerOutlierDetectionBaseEjectionDuration;
  interval: AwsAppmeshVirtualNodeArgsSpecListenerOutlierDetectionInterval;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerPortMapping {
  port: number;
  protocol: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeoutGrpcIdle {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeoutGrpcPerRequest {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeoutGrpc {
  idle: AwsAppmeshVirtualNodeArgsSpecListenerTimeoutGrpcIdle;
  per_request: AwsAppmeshVirtualNodeArgsSpecListenerTimeoutGrpcPerRequest;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttpIdle {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttpPerRequest {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttp {
  idle: AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttpIdle;
  per_request: AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttpPerRequest;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttp2Idle {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttp2PerRequest {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttp2 {
  idle: AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttp2Idle;
  per_request: AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttp2PerRequest;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeoutTcpIdle {
  unit: string;
  value: number;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeoutTcp {
  idle: AwsAppmeshVirtualNodeArgsSpecListenerTimeoutTcpIdle;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTimeout {
  grpc: AwsAppmeshVirtualNodeArgsSpecListenerTimeoutGrpc;
  http: AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttp;
  http2: AwsAppmeshVirtualNodeArgsSpecListenerTimeoutHttp2;
  tcp: AwsAppmeshVirtualNodeArgsSpecListenerTimeoutTcp;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTlsCertificateAcm {
  certificate_arn: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTlsCertificateFile {
  certificate_chain: string;
  private_key: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTlsCertificateSds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTlsCertificate {
  acm: AwsAppmeshVirtualNodeArgsSpecListenerTlsCertificateAcm;
  file: AwsAppmeshVirtualNodeArgsSpecListenerTlsCertificateFile;
  sds: AwsAppmeshVirtualNodeArgsSpecListenerTlsCertificateSds;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTlsValidationSubjectAlternativeNamesMatch {
  exact: string[];
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTlsValidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualNodeArgsSpecListenerTlsValidationSubjectAlternativeNamesMatch;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTlsValidationTrustFile {
  certificate_chain: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTlsValidationTrustSds {
  secret_name: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTlsValidationTrust {
  file: AwsAppmeshVirtualNodeArgsSpecListenerTlsValidationTrustFile;
  sds: AwsAppmeshVirtualNodeArgsSpecListenerTlsValidationTrustSds;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTlsValidation {
  subject_alternative_names: AwsAppmeshVirtualNodeArgsSpecListenerTlsValidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualNodeArgsSpecListenerTlsValidationTrust;
}
export interface AwsAppmeshVirtualNodeArgsSpecListenerTls {
  mode: string;
  certificate: AwsAppmeshVirtualNodeArgsSpecListenerTlsCertificate;
  validation: AwsAppmeshVirtualNodeArgsSpecListenerTlsValidation;
}
export interface AwsAppmeshVirtualNodeArgsSpecListener {
  connection_pool: AwsAppmeshVirtualNodeArgsSpecListenerConnectionPool;
  health_check: AwsAppmeshVirtualNodeArgsSpecListenerHealthCheck;
  outlier_detection: AwsAppmeshVirtualNodeArgsSpecListenerOutlierDetection;
  port_mapping: AwsAppmeshVirtualNodeArgsSpecListenerPortMapping;
  timeout: AwsAppmeshVirtualNodeArgsSpecListenerTimeout;
  tls: AwsAppmeshVirtualNodeArgsSpecListenerTls;
}
export interface AwsAppmeshVirtualNodeArgsSpecLoggingAccessLogFileFormatJson {
  key: string;
  value: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecLoggingAccessLogFileFormat {
  text?: string;
  json: AwsAppmeshVirtualNodeArgsSpecLoggingAccessLogFileFormatJson;
}
export interface AwsAppmeshVirtualNodeArgsSpecLoggingAccessLogFile {
  path: string;
  format: AwsAppmeshVirtualNodeArgsSpecLoggingAccessLogFileFormat;
}
export interface AwsAppmeshVirtualNodeArgsSpecLoggingAccessLog {
  file: AwsAppmeshVirtualNodeArgsSpecLoggingAccessLogFile;
}
export interface AwsAppmeshVirtualNodeArgsSpecLogging {
  access_log: AwsAppmeshVirtualNodeArgsSpecLoggingAccessLog;
}
export interface AwsAppmeshVirtualNodeArgsSpecServiceDiscoveryAwsCloudMap {
  attributes?: {
    [key: string]: string;
  };
  namespace_name: string;
  service_name: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecServiceDiscoveryDns {
  hostname: string;
  ip_preference?: string;
  response_type?: string;
}
export interface AwsAppmeshVirtualNodeArgsSpecServiceDiscovery {
  aws_cloud_map: AwsAppmeshVirtualNodeArgsSpecServiceDiscoveryAwsCloudMap;
  dns: AwsAppmeshVirtualNodeArgsSpecServiceDiscoveryDns;
}
export interface AwsAppmeshVirtualNodeArgsSpec {
  backend: AwsAppmeshVirtualNodeArgsSpecBackend;
  backend_defaults: AwsAppmeshVirtualNodeArgsSpecBackendDefaults;
  listener: AwsAppmeshVirtualNodeArgsSpecListener;
  logging: AwsAppmeshVirtualNodeArgsSpecLogging;
  service_discovery: AwsAppmeshVirtualNodeArgsSpecServiceDiscovery;
}
export interface AwsAppmeshVirtualNodeArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: AwsAppmeshVirtualNodeArgsSpec;
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