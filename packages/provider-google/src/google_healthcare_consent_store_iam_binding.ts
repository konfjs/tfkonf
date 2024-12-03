import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleHealthcareConsentStoreIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleHealthcareConsentStoreIamBindingArgs {
  consent_store_id: string;
  dataset: string;
  members: string[];
  role: string;
  condition: GoogleHealthcareConsentStoreIamBindingArgsCondition;
}
export class google_healthcare_consent_store_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareConsentStoreIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_consent_store_iam_binding");
  }
}