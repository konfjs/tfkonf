import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleClouddeployTargetIamPolicyArgs {
  name: string;
  policy_data: string;
}
export class google_clouddeploy_target_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployTargetIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_target_iam_policy");
  }
}