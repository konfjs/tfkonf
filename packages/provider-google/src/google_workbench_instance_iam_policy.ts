import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleWorkbenchInstanceIamPolicyArgs {
  name: string;
  policy_data: string;
}
export class google_workbench_instance_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleWorkbenchInstanceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_workbench_instance_iam_policy");
  }
}