import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleCloudTasksQueueIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudTasksQueueIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleCloudTasksQueueIamBindingArgsCondition;
}
export class google_cloud_tasks_queue_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudTasksQueueIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_cloud_tasks_queue_iam_binding");
  }
}