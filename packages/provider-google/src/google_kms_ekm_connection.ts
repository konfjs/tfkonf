import { TerraformConfig, TerraformResource } from "tfs";
export interface ServerCertificates {
  raw_der: string;
}
export interface ServiceResolvers {
  hostname: string;
  service_directory_service: string;
  server_certificates: ServerCertificates;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleKmsEkmConnectionArgs {
  key_management_mode?: string;
  location: string;
  name: string;
  service_resolvers: ServiceResolvers;
  timeouts: Timeouts;
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