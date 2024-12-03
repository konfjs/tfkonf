import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleCloudTasksQueueIamPolicyArgs {
  name: string;
  policy_data: string;
}
export class google_cloud_tasks_queue_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudTasksQueueIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_cloud_tasks_queue_iam_policy");
  }
}