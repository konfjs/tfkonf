import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigqueryConnectionIamMemberArgs {
  connection_id: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_bigquery_connection_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryConnectionIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_connection_iam_member");
  }
}