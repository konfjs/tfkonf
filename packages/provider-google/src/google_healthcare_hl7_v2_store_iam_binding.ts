import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleHealthcareHl7V2StoreIamBindingArgs {
  hl7_v2_store_id: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_healthcare_hl7_v2_store_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareHl7V2StoreIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_hl7_v2_store_iam_binding");
  }
}