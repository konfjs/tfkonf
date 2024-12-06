import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudRunV2JobIamPolicyArgs {
  name: string;
  policy_data: string;
}

export class google_cloud_run_v2_job_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunV2JobIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_v2_job_iam_policy");
  }
}
