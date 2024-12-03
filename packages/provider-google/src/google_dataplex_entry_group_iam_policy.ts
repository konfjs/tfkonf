import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataplexEntryGroupIamPolicyArgs {
  entry_group_id: string;
  policy_data: string;
}
export class google_dataplex_entry_group_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexEntryGroupIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_entry_group_iam_policy");
  }
}