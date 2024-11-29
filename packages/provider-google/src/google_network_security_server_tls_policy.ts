import { TerraformConfig, TerraformResource } from "tfs";
export interface CertificateProviderInstance {
  plugin_instance: string;
}
export interface GrpcEndpoint {
  target_uri: string;
}
export interface ClientValidationCa {
  certificate_provider_instance: CertificateProviderInstance;
  grpc_endpoint: GrpcEndpoint;
}
export interface MtlsPolicy {
  client_validation_mode?: string;
  client_validation_trust_config?: string;
  client_validation_ca: ClientValidationCa;
}
export interface CertificateProviderInstance {
  plugin_instance: string;
}
export interface GrpcEndpoint {
  target_uri: string;
}
export interface ServerCertificate {
  certificate_provider_instance: CertificateProviderInstance;
  grpc_endpoint: GrpcEndpoint;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkSecurityServerTlsPolicyArgs {
  allow_open?: boolean;
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  name: string;
  mtls_policy: MtlsPolicy;
  server_certificate: ServerCertificate;
  timeouts: Timeouts;
}
export class google_network_security_server_tls_policy extends TerraformResource {
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
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityServerTlsPolicyArgs) {
    super(config, "resource", args, resourceName, "google_network_security_server_tls_policy");
  }
}