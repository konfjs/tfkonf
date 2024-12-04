import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareDatasetIamPolicyArgs {
  dataset_id: string;
  policy_data: string;
}

export class google_healthcare_dataset_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareDatasetIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_dataset_iam_policy");
  }
}
