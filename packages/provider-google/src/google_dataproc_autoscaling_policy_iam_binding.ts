import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataprocAutoscalingPolicyIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataprocAutoscalingPolicyIamBindingArgs {
  members: string[];
  policy_id: string;
  role: string;
  condition: GoogleDataprocAutoscalingPolicyIamBindingArgscondition;
}
export class google_dataproc_autoscaling_policy_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocAutoscalingPolicyIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_autoscaling_policy_iam_binding");
  }
}