import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetappStoragePoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetappStoragePoolArgs {
  active_directory?: string;
  allow_auto_tiering?: boolean;
  capacity_gib: string;
  description?: string;
  kms_config?: string;
  labels?: {
    [key: string]: string;
  };
  ldap_enabled?: boolean;
  location: string;
  name: string;
  network: string;
  replica_zone?: string;
  service_level: string;
  zone?: string;
  timeouts: GoogleNetappStoragePoolArgsTimeouts;
}
export class google_netapp_storage_pool extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly encryption_type!: string;
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly volume_capacity_gib!: string;
  readonly volume_count!: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetappStoragePoolArgs) {
    super(config, "resource", args, resourceName, "google_netapp_storage_pool");
  }
}