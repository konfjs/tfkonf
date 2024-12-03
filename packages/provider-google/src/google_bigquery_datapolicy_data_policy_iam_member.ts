import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleBigqueryDatapolicyDataPolicyIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigqueryDatapolicyDataPolicyIamMemberArgs {
  data_policy_id: string;
  member: string;
  role: string;
  condition: GoogleBigqueryDatapolicyDataPolicyIamMemberArgsCondition;
}
export class google_bigquery_datapolicy_data_policy_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDatapolicyDataPolicyIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_datapolicy_data_policy_iam_member");
  }
}