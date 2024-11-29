import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleHealthcareDicomStoreIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleHealthcareDicomStoreIamMemberArgs {
  dicom_store_id: string;
  member: string;
  role: string;
  condition: GoogleHealthcareDicomStoreIamMemberArgsCondition;
}
export class google_healthcare_dicom_store_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareDicomStoreIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_dicom_store_iam_member");
  }
}