import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleHealthcareFhirStoreIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleHealthcareFhirStoreIamBindingArgs {
  fhir_store_id: string;
  members: string[];
  role: string;
  condition: GoogleHealthcareFhirStoreIamBindingArgsCondition;
}
export class google_healthcare_fhir_store_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareFhirStoreIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_fhir_store_iam_binding");
  }
}