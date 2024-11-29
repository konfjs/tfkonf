import { TerraformConfig, TerraformResource } from "tfs";
export interface PrivateConfig {
  ca_pool: string;
  is_private: boolean;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface WorkforceIdentityFederationConfig {
  enabled: boolean;
}
export interface GoogleSecureSourceManagerInstanceArgs {
  instance_id: string;
  kms_key?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  private_config: PrivateConfig;
  timeouts: Timeouts;
  workforce_identity_federation_config: WorkforceIdentityFederationConfig;
}
export class google_secure_source_manager_instance extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly host_config!: any[];
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly state_note!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerInstanceArgs) {
    super(config, "resource", args, resourceName, "google_secure_source_manager_instance");
  }
}