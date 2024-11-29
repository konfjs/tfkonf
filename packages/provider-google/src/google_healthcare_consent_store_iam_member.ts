import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleHealthcareConsentStoreIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleHealthcareConsentStoreIamMemberArgs {
  consent_store_id: string;
  dataset: string;
  member: string;
  role: string;
  condition: GoogleHealthcareConsentStoreIamMemberArgscondition;
}
export class google_healthcare_consent_store_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareConsentStoreIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_consent_store_iam_member");
  }
}