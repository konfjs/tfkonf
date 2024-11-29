import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleClouddeployTargetIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleClouddeployTargetIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleClouddeployTargetIamBindingArgscondition;
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