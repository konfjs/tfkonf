import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataplexTaskIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexTaskIamMemberArgs {
  lake: string;
  member: string;
  role: string;
  task_id: string;
  condition: GoogleDataplexTaskIamMemberArgsCondition;
}
export class google_dataplex_task_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexTaskIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_task_iam_member");
  }
}