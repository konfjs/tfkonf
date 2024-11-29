import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleHealthcareFhirStoreIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleHealthcareFhirStoreIamBindingArgs {
  fhir_store_id: string;
  members: string[];
  role: string;
  condition: GoogleHealthcareFhirStoreIamBindingArgscondition;
}
export class google_healthcare_fhir_store_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareFhirStoreIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_fhir_store_iam_binding");
  }
}