import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleLoggingLogViewIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleLoggingLogViewIamMemberArgs {
  bucket: string;
  member: string;
  name: string;
  parent: string;
  role: string;
  condition: GoogleLoggingLogViewIamMemberArgsCondition;
}
export class google_logging_log_view_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingLogViewIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_logging_log_view_iam_member");
  }
}