import { TerraformConfig, TerraformResource } from "tfs";
export interface CertificateProviderInstance {
  plugin_instance: string;
}
export interface GrpcEndpoint {
  target_uri: string;
}
export interface ClientCertificate {
  certificate_provider_instance: CertificateProviderInstance;
  grpc_endpoint: GrpcEndpoint;
}
export interface CertificateProviderInstance {
  plugin_instance: string;
}
export interface GrpcEndpoint {
  target_uri: string;
}
export interface ServerValidationCa {
  certificate_provider_instance: CertificateProviderInstance;
  grpc_endpoint: GrpcEndpoint;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkSecurityClientTlsPolicyArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  name: string;
  sni?: string;
  client_certificate: ClientCertificate;
  server_validation_ca: ServerValidationCa;
  timeouts: Timeouts;
}
export class google_network_security_client_tls_policy extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityClientTlsPolicyArgs) {
    super(config, "resource", args, resourceName, "google_network_security_client_tls_policy");
  }
}