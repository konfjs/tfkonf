import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataplexLakeIamPolicyArgs {
  lake: string;
  policy_data: string;
}
export class google_dataplex_lake_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexLakeIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_lake_iam_policy");
  }
}