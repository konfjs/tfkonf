import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudTasksQueueIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: Condition;
}
export class google_cloud_tasks_queue_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudTasksQueueIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_cloud_tasks_queue_iam_member");
  }
}