import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataplexDatascanIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexDatascanIamMemberArgs {
  data_scan_id: string;
  member: string;
  role: string;
  condition: GoogleDataplexDatascanIamMemberArgsCondition;
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