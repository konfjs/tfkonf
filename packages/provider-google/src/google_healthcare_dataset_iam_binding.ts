import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleHealthcareDatasetIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleHealthcareDatasetIamBindingArgs {
  dataset_id: string;
  members: string[];
  role: string;
  condition: GoogleHealthcareDatasetIamBindingArgscondition;
}
export class google_healthcare_dataset_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareDatasetIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_dataset_iam_binding");
  }
}