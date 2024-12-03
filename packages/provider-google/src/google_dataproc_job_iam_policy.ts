import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataprocJobIamPolicyArgs {
  job_id: string;
  policy_data: string;
}
export class google_dataproc_job_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocJobIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_job_iam_policy");
  }
}