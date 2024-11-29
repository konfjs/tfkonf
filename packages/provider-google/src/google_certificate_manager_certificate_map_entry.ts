import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleCertificateManagerCertificateMapEntryArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCertificateManagerCertificateMapEntryArgs {
  certificates: string[];
  description?: string;
  hostname?: string;
  labels?: {
    [key: string]: string;
  };
  map: string;
  matcher?: string;
  name: string;
  timeouts: GoogleCertificateManagerCertificateMapEntryArgsTimeouts;
}
export class google_certificate_manager_certificate_map_entry extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCertificateManagerCertificateMapEntryArgs) {
    super(config, "resource", args, resourceName, "google_certificate_manager_certificate_map_entry");
  }
}