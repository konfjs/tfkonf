import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexDatascanIamBindingArgs {
  data_scan_id: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_dataplex_datascan_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexDatascanIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_datascan_iam_binding");
  }
}