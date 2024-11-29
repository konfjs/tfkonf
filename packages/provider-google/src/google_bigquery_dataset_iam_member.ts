import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigqueryDatasetIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigqueryDatasetIamMemberArgs {
  dataset_id: string;
  member: string;
  role: string;
  condition: GoogleBigqueryDatasetIamMemberArgscondition;
}
export class google_bigquery_dataset_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDatasetIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_dataset_iam_member");
  }
}