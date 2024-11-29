import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBigqueryDatasetIamPolicyArgs {
  dataset_id: string;
  policy_data: string;
}
export class google_bigquery_dataset_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDatasetIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_dataset_iam_policy");
  }
}