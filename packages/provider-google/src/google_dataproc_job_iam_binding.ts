import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocJobIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocJobIamBindingArgs {
  job_id: string;
  members: string[];
  role: string;
  condition: GoogleDataprocJobIamBindingArgsCondition;
}

export class google_dataproc_job_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocJobIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_job_iam_binding");
  }
}
