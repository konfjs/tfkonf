import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataplexAspectTypeArgs {
  aspect_type_id?: string;
  description?: string;
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  metadata_template?: string;
  timeouts: Timeouts;
}
export class google_dataplex_aspect_type extends TerraformResource {
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
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexAspectTypeArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_aspect_type");
  }
}