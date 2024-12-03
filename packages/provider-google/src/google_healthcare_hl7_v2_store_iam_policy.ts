import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleHealthcareHl7V2StoreIamPolicyArgs {
  hl7_v2_store_id: string;
  policy_data: string;
}
export class google_healthcare_hl7_v2_store_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareHl7V2StoreIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_hl7_v2_store_iam_policy");
  }
}