import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryTableIamPolicyArgs {
  dataset_id: string;
  policy_data: string;
  table_id: string;
}

export class google_bigquery_table_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryTableIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_table_iam_policy");
  }
}
