import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryDatapolicyDataPolicyIamPolicyArgs {
  data_policy_id: string;
  policy_data: string;
}

export class google_bigquery_datapolicy_data_policy_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDatapolicyDataPolicyIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_datapolicy_data_policy_iam_policy");
  }
}
