import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleHealthcareHl7V2StoreIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleHealthcareHl7V2StoreIamMemberArgs {
  hl7_v2_store_id: string;
  member: string;
  role: string;
  condition: GoogleHealthcareHl7V2StoreIamMemberArgscondition;
}
export class google_healthcare_hl7_v2_store_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareHl7V2StoreIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_hl7_v2_store_iam_member");
  }
}