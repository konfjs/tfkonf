import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudRunV2JobIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudRunV2JobIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleCloudRunV2JobIamBindingArgsCondition;
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
