import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificateFile {
  certificate_chain: string;
  private_key: string;
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificateSds {
  secret_name: string;
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificate {
  file: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificateFile;
  sds: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificateSds;
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  exact: string[];
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  certificate_authority_arns: string[];
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  certificate_chain: string;
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
  secret_name: string;
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrust {
  acm: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
  file: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustFile;
  sds: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidation {
  subject_alternative_names: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidationTrust;
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTls {
  enforce?: boolean;
  ports?: number[];
  certificate: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsCertificate;
  validation: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTlsValidation;
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicy {
  tls: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicyTls;
}
export interface AwsAppmeshVirtualGatewayArgsSpecBackendDefaults {
  client_policy: AwsAppmeshVirtualGatewayArgsSpecBackendDefaultsClientPolicy;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolGrpc {
  max_requests: number;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolHttp {
  max_connections: number;
  max_pending_requests?: number;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolHttp2 {
  max_requests: number;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPool {
  grpc: AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolGrpc;
  http: AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolHttp;
  http2: AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPoolHttp2;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerHealthCheck {
  healthy_threshold: number;
  interval_millis: number;
  path?: string;
  protocol: string;
  timeout_millis: number;
  unhealthy_threshold: number;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerPortMapping {
  port: number;
  protocol: string;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateAcm {
  certificate_arn: string;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateFile {
  certificate_chain: string;
  private_key: string;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateSds {
  secret_name: string;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificate {
  acm: AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateAcm;
  file: AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateFile;
  sds: AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificateSds;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationSubjectAlternativeNamesMatch {
  exact: string[];
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationSubjectAlternativeNames {
  match: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationSubjectAlternativeNamesMatch;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrustFile {
  certificate_chain: string;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrustSds {
  secret_name: string;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrust {
  file: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrustFile;
  sds: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrustSds;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidation {
  subject_alternative_names: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationSubjectAlternativeNames;
  trust: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidationTrust;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListenerTls {
  mode: string;
  certificate: AwsAppmeshVirtualGatewayArgsSpecListenerTlsCertificate;
  validation: AwsAppmeshVirtualGatewayArgsSpecListenerTlsValidation;
}
export interface AwsAppmeshVirtualGatewayArgsSpecListener {
  connection_pool: AwsAppmeshVirtualGatewayArgsSpecListenerConnectionPool;
  health_check: AwsAppmeshVirtualGatewayArgsSpecListenerHealthCheck;
  port_mapping: AwsAppmeshVirtualGatewayArgsSpecListenerPortMapping;
  tls: AwsAppmeshVirtualGatewayArgsSpecListenerTls;
}
export interface AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFileFormatJson {
  key: string;
  value: string;
}
export interface AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFileFormat {
  text?: string;
  json: AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFileFormatJson;
}
export interface AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFile {
  path: string;
  format: AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFileFormat;
}
export interface AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLog {
  file: AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLogFile;
}
export interface AwsAppmeshVirtualGatewayArgsSpecLogging {
  access_log: AwsAppmeshVirtualGatewayArgsSpecLoggingAccessLog;
}
export interface AwsAppmeshVirtualGatewayArgsSpec {
  backend_defaults: AwsAppmeshVirtualGatewayArgsSpecBackendDefaults;
  listener: AwsAppmeshVirtualGatewayArgsSpecListener;
  logging: AwsAppmeshVirtualGatewayArgsSpecLogging;
}
export interface AwsAppmeshVirtualGatewayArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: AwsAppmeshVirtualGatewayArgsSpec;
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