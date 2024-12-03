import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleBigqueryDatapolicyDataPolicyIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigqueryDatapolicyDataPolicyIamBindingArgs {
  data_policy_id: string;
  members: string[];
  role: string;
  condition: GoogleBigqueryDatapolicyDataPolicyIamBindingArgsCondition;
}
export class google_bigquery_datapolicy_data_policy_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDatapolicyDataPolicyIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_datapolicy_data_policy_iam_binding");
  }
}