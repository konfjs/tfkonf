import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareDicomStoreIamPolicyArgs {
  dicom_store_id: string;
  policy_data: string;
}

export class google_healthcare_dicom_store_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareDicomStoreIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_dicom_store_iam_policy");
  }
}
