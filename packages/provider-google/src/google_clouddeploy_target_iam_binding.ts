import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleClouddeployTargetIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleClouddeployTargetIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleClouddeployTargetIamBindingArgsCondition;
}
export class google_clouddeploy_target_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployTargetIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_target_iam_binding");
  }
}