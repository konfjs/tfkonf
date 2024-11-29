import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleHealthcareConsentStoreIamPolicyArgs {
  consent_store_id: string;
  dataset: string;
  policy_data: string;
}
export class google_healthcare_consent_store_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareConsentStoreIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_consent_store_iam_policy");
  }
}