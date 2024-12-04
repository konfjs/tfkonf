import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkSecurityClientTlsPolicyArgsClientCertificateCertificateProviderInstance {
  plugin_instance: string;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsClientCertificateGrpcEndpoint {
  target_uri: string;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsClientCertificate {
  certificate_provider_instance: GoogleNetworkSecurityClientTlsPolicyArgsClientCertificateCertificateProviderInstance;
  grpc_endpoint: GoogleNetworkSecurityClientTlsPolicyArgsClientCertificateGrpcEndpoint;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCaCertificateProviderInstance {
  plugin_instance: string;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCaGrpcEndpoint {
  target_uri: string;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCa {
  certificate_provider_instance: GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCaCertificateProviderInstance;
  grpc_endpoint: GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCaGrpcEndpoint;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkSecurityClientTlsPolicyArgs {
  description?: string;
  labels?: { [key: string]: string };
  location?: string;
  name: string;
  sni?: string;
  client_certificate: GoogleNetworkSecurityClientTlsPolicyArgsClientCertificate;
  server_validation_ca: GoogleNetworkSecurityClientTlsPolicyArgsServerValidationCa;
  timeouts?: GoogleNetworkSecurityClientTlsPolicyArgsTimeouts;
}

export class google_network_security_client_tls_policy extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityClientTlsPolicyArgs) {
    super(config, "resource", args, resourceName, "google_network_security_client_tls_policy");
  }
}
