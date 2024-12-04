import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocAutoscalingPolicyIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocAutoscalingPolicyIamMemberArgs {
  member: string;
  policy_id: string;
  role: string;
  condition: GoogleDataprocAutoscalingPolicyIamMemberArgsCondition;
}

export class google_dataproc_autoscaling_policy_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocAutoscalingPolicyIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_autoscaling_policy_iam_member");
  }
}
