import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataprocJobIamBindingArgs {
  job_id: string;
  members: string[];
  role: string;
  condition: Condition;
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