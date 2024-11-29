import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSecretManagerSecretVersionArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSecretManagerSecretVersionArgs {
  deletion_policy?: string;
  enabled?: boolean;
  is_secret_data_base64?: boolean;
  secret: string;
  secret_data: string;
  timeouts: GoogleSecretManagerSecretVersionArgstimeouts;
}
export class google_secret_manager_secret_version extends TerraformResource {
  readonly create_time!: string;
  readonly destroy_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecretManagerSecretVersionArgs) {
    super(config, "resource", args, resourceName, "google_secret_manager_secret_version");
  }
}