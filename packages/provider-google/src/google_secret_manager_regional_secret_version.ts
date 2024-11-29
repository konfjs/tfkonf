import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSecretManagerRegionalSecretVersionArgs {
  deletion_policy?: string;
  enabled?: boolean;
  is_secret_data_base64?: boolean;
  secret: string;
  secret_data: string;
  timeouts: Timeouts;
}
export class google_secret_manager_regional_secret_version extends TerraformResource {
  readonly create_time!: string;
  readonly customer_managed_encryption!: any[];
  readonly destroy_time!: string;
  readonly id?: string;
  readonly location!: string;
  readonly name!: string;
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecretManagerRegionalSecretVersionArgs) {
    super(config, "resource", args, resourceName, "google_secret_manager_regional_secret_version");
  }
}