import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleActiveDirectoryDomainArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleActiveDirectoryDomainArgs {
  admin?: string;
  authorized_networks?: string[];
  deletion_protection?: boolean;
  domain_name: string;
  labels?: {
    [key: string]: string;
  };
  locations: string[];
  reserved_ip_range: string;
  timeouts: GoogleActiveDirectoryDomainArgsTimeouts;
}
export class google_active_directory_domain extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly fqdn!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleActiveDirectoryDomainArgs) {
    super(config, "resource", args, resourceName, "google_active_directory_domain");
  }
}