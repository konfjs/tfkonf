import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigqueryTableIamMemberArgs {
  dataset_id: string;
  member: string;
  role: string;
  table_id: string;
  condition: Condition;
}
export class google_bigquery_table_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryTableIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_table_iam_member");
  }
}