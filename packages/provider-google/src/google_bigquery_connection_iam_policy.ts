import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigqueryConnectionIamPolicyArgs {
  connection_id: string;
  policy_data: string;
}
export class google_bigquery_connection_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryConnectionIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_connection_iam_policy");
  }
}