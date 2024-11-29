import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleClouddeployCustomTargetTypeIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleClouddeployCustomTargetTypeIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleClouddeployCustomTargetTypeIamBindingArgscondition;
}
export class google_clouddeploy_custom_target_type_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployCustomTargetTypeIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_custom_target_type_iam_binding");
  }
}