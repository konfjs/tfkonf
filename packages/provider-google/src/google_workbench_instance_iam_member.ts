import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleWorkbenchInstanceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleWorkbenchInstanceIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleWorkbenchInstanceIamMemberArgsCondition;
}
export class google_workbench_instance_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleWorkbenchInstanceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_workbench_instance_iam_member");
  }
}