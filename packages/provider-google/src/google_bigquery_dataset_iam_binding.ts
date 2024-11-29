import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigqueryDatasetIamBindingArgs {
  dataset_id: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_bigquery_dataset_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDatasetIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_dataset_iam_binding");
  }
}