import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetappKmsconfigArgs {
  crypto_key_name: string;
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  timeouts: Timeouts;
}
export class google_netapp_kmsconfig extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly instructions!: string;
  readonly project?: string;
  readonly service_account!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetappKmsconfigArgs) {
    super(config, "resource", args, resourceName, "google_netapp_kmsconfig");
  }
}