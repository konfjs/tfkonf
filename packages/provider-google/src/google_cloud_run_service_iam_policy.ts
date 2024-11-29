import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleCloudRunServiceIamPolicyArgs {
  policy_data: string;
  service: string;
}
export class google_cloud_run_service_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunServiceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_service_iam_policy");
  }
}