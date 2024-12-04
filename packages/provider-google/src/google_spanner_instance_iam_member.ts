import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSpannerInstanceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSpannerInstanceIamMemberArgs {
  instance: string;
  member: string;
  role: string;
  condition: GoogleSpannerInstanceIamMemberArgsCondition;
}

export class google_spanner_instance_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerInstanceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_spanner_instance_iam_member");
  }
}
