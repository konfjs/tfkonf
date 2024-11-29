import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataplexEntryGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataplexEntryGroupArgs {
  description?: string;
  display_name?: string;
  entry_group_id?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  timeouts: GoogleDataplexEntryGroupArgsTimeouts;
}
export class google_dataplex_entry_group extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly transfer_status!: string;
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexEntryGroupArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_entry_group");
  }
}