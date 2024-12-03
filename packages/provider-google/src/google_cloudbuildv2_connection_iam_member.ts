import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleCloudbuildv2ConnectionIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudbuildv2ConnectionIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleCloudbuildv2ConnectionIamMemberArgsCondition;
}
export class google_cloudbuildv2_connection_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudbuildv2ConnectionIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_cloudbuildv2_connection_iam_member");
  }
}