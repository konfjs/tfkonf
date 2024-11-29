import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudRunV2JobIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: Condition;
}
export class google_cloud_run_v2_job_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunV2JobIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_v2_job_iam_binding");
  }
}