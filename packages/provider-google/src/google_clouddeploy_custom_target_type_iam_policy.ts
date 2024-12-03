import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleClouddeployCustomTargetTypeIamPolicyArgs {
  name: string;
  policy_data: string;
}
export class google_clouddeploy_custom_target_type_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployCustomTargetTypeIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_custom_target_type_iam_policy");
  }
}