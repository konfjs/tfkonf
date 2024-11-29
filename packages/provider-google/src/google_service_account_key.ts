import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleServiceAccountKeyArgs {
  keepers?: {
    [key: string]: string;
  };
  key_algorithm?: string;
  private_key_type?: string;
  public_key_data?: string;
  public_key_type?: string;
  service_account_id: string;
}
export class google_service_account_key extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly private_key!: string;
  readonly public_key!: string;
  readonly valid_after!: string;
  readonly valid_before!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleServiceAccountKeyArgs) {
    super(config, "resource", args, resourceName, "google_service_account_key");
  }
}