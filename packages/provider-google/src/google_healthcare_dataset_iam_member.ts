import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleHealthcareDatasetIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleHealthcareDatasetIamMemberArgs {
  dataset_id: string;
  member: string;
  role: string;
  condition: GoogleHealthcareDatasetIamMemberArgsCondition;
}
export class google_healthcare_dataset_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareDatasetIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_dataset_iam_member");
  }
}