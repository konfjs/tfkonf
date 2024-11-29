import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCaCertificateProviderInstance {
  plugin_instance: string;
}
export interface GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCaGrpcEndpoint {
  target_uri: string;
}
export interface GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCa {
  certificate_provider_instance: GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCaCertificateProviderInstance;
  grpc_endpoint: GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCaGrpcEndpoint;
}
export interface GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicy {
  client_validation_mode?: string;
  client_validation_trust_config?: string;
  client_validation_ca: GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicyClientValidationCa;
}
export interface GoogleNetworkSecurityServerTlsPolicyArgsServerCertificateCertificateProviderInstance {
  plugin_instance: string;
}
export interface GoogleNetworkSecurityServerTlsPolicyArgsServerCertificateGrpcEndpoint {
  target_uri: string;
}
export interface GoogleNetworkSecurityServerTlsPolicyArgsServerCertificate {
  certificate_provider_instance: GoogleNetworkSecurityServerTlsPolicyArgsServerCertificateCertificateProviderInstance;
  grpc_endpoint: GoogleNetworkSecurityServerTlsPolicyArgsServerCertificateGrpcEndpoint;
}
export interface GoogleNetworkSecurityServerTlsPolicyArgstimeouts {
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
  mtls_policy: GoogleNetworkSecurityServerTlsPolicyArgsMtlsPolicy;
  server_certificate: GoogleNetworkSecurityServerTlsPolicyArgsServerCertificate;
  timeouts: GoogleNetworkSecurityServerTlsPolicyArgstimeouts;
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