import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataplexDatascanIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexDatascanIamMemberArgs {
  data_scan_id: string;
  member: string;
  role: string;
  condition: GoogleDataplexDatascanIamMemberArgscondition;
}
export class google_dataplex_datascan_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexDatascanIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_datascan_iam_member");
  }
}