import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareHl7V2StoreIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleHealthcareHl7V2StoreIamBindingArgs {
  hl7_v2_store_id: string;
  members: string[];
  role: string;
  condition: GoogleHealthcareHl7V2StoreIamBindingArgsCondition;
}

export class google_healthcare_hl7_v2_store_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareHl7V2StoreIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_hl7_v2_store_iam_binding");
  }
}
