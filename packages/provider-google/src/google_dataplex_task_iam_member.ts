import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataplexTaskIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexTaskIamMemberArgs {
  lake: string;
  member: string;
  role: string;
  task_id: string;
  condition: GoogleDataplexTaskIamMemberArgscondition;
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