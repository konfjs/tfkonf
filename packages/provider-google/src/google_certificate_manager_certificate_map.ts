import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleCertificateManagerCertificateMapArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCertificateManagerCertificateMapArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  timeouts?: GoogleCertificateManagerCertificateMapArgsTimeouts;
}
export class google_certificate_manager_certificate_map extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly gclb_targets!: any[];
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCertificateManagerCertificateMapArgs) {
    super(config, "resource", args, resourceName, "google_certificate_manager_certificate_map");
  }
}