import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleBigqueryTableIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigqueryTableIamBindingArgs {
  dataset_id: string;
  members: string[];
  role: string;
  table_id: string;
  condition: GoogleBigqueryTableIamBindingArgsCondition;
}
export class google_bigquery_table_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryTableIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_table_iam_binding");
  }
}