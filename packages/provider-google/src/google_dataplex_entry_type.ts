import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataplexEntryTypeArgsRequiredAspects {
  type?: string;
}
export interface GoogleDataplexEntryTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataplexEntryTypeArgs {
  description?: string;
  display_name?: string;
  entry_type_id?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  platform?: string;
  system?: string;
  type_aliases?: string[];
  required_aspects: GoogleDataplexEntryTypeArgsRequiredAspects;
  timeouts?: GoogleDataplexEntryTypeArgsTimeouts;
}
export class google_dataplex_entry_type extends TerraformResource {
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
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexEntryTypeArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_entry_type");
  }
}