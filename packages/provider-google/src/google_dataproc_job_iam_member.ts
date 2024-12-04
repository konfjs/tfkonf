import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocJobIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocJobIamMemberArgs {
  job_id: string;
  member: string;
  role: string;
  condition: GoogleDataprocJobIamMemberArgsCondition;
}

export class google_dataproc_job_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocJobIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_job_iam_member");
  }
}
