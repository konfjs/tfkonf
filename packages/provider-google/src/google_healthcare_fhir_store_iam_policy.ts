import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleHealthcareFhirStoreIamPolicyArgs {
  fhir_store_id: string;
  policy_data: string;
}
export class google_healthcare_fhir_store_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareFhirStoreIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_fhir_store_iam_policy");
  }
}