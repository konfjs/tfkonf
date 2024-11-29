import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleClouddeployCustomTargetTypeIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: Condition;
}
export class google_clouddeploy_custom_target_type_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployCustomTargetTypeIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_custom_target_type_iam_member");
  }
}