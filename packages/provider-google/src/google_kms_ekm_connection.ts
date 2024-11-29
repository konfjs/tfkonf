import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleKmsEkmConnectionArgsServiceResolversServerCertificates {
  raw_der: string;
}
export interface GoogleKmsEkmConnectionArgsServiceResolvers {
  hostname: string;
  service_directory_service: string;
  server_certificates: GoogleKmsEkmConnectionArgsServiceResolversServerCertificates;
}
export interface GoogleKmsEkmConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleKmsEkmConnectionArgs {
  key_management_mode?: string;
  location: string;
  name: string;
  service_resolvers: GoogleKmsEkmConnectionArgsServiceResolvers;
  timeouts: GoogleKmsEkmConnectionArgsTimeouts;
}
export class google_kms_ekm_connection extends TerraformResource {
  readonly create_time!: string;
  readonly crypto_space_path?: string;
  readonly etag?: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsEkmConnectionArgs) {
    super(config, "resource", args, resourceName, "google_kms_ekm_connection");
  }
}