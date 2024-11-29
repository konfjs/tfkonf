import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudRunV2ServiceIamPolicyArgs {
  name: string;
  policy_data: string;
}
export class google_cloud_run_v2_service_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunV2ServiceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_v2_service_iam_policy");
  }
}