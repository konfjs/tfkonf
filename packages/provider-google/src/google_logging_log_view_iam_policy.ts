import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleLoggingLogViewIamPolicyArgs {
  bucket: string;
  name: string;
  parent: string;
  policy_data: string;
}
export class google_logging_log_view_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingLogViewIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_logging_log_view_iam_policy");
  }
}