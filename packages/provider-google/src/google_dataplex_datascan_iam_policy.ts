import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataplexDatascanIamPolicyArgs {
  data_scan_id: string;
  policy_data: string;
}
export class google_dataplex_datascan_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexDatascanIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_datascan_iam_policy");
  }
}