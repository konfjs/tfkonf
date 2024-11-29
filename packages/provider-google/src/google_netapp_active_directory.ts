import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetappActiveDirectoryArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetappActiveDirectoryArgs {
  administrators?: string[];
  aes_encryption?: boolean;
  backup_operators?: string[];
  description?: string;
  dns: string;
  domain: string;
  encrypt_dc_connections?: boolean;
  kdc_hostname?: string;
  kdc_ip?: string;
  labels?: {
    [key: string]: string;
  };
  ldap_signing?: boolean;
  location: string;
  name: string;
  net_bios_prefix: string;
  nfs_users_with_ldap?: boolean;
  password: string;
  security_operators?: string[];
  site?: string;
  username: string;
  timeouts: GoogleNetappActiveDirectoryArgstimeouts;
}
export class google_netapp_active_directory extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly organizational_unit?: string;
  readonly project?: string;
  readonly state!: string;
  readonly state_details!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetappActiveDirectoryArgs) {
    super(config, "resource", args, resourceName, "google_netapp_active_directory");
  }
}