import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleHealthcareFhirStoreIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleHealthcareFhirStoreIamMemberArgs {
  fhir_store_id: string;
  member: string;
  role: string;
  condition: GoogleHealthcareFhirStoreIamMemberArgsCondition;
}
export class google_healthcare_fhir_store_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareFhirStoreIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_fhir_store_iam_member");
  }
}