import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleClouddeployTargetIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleClouddeployTargetIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleClouddeployTargetIamMemberArgsCondition;
}

export class google_clouddeploy_target_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployTargetIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_target_iam_member");
  }
}
