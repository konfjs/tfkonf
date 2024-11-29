import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataprocAutoscalingPolicyIamPolicyArgs {
  policy_data: string;
  policy_id: string;
}
export class google_dataproc_autoscaling_policy_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocAutoscalingPolicyIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_autoscaling_policy_iam_policy");
  }
}