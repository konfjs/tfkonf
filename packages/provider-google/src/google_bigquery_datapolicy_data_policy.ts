import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigqueryDatapolicyDataPolicyArgsDataMaskingPolicy {
  predefined_expression?: string;
  routine?: string;
}
export interface GoogleBigqueryDatapolicyDataPolicyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigqueryDatapolicyDataPolicyArgs {
  data_policy_id: string;
  data_policy_type: string;
  location: string;
  policy_tag: string;
  data_masking_policy: GoogleBigqueryDatapolicyDataPolicyArgsDataMaskingPolicy;
  timeouts: GoogleBigqueryDatapolicyDataPolicyArgstimeouts;
}
export class google_bigquery_datapolicy_data_policy extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDatapolicyDataPolicyArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_datapolicy_data_policy");
  }
}