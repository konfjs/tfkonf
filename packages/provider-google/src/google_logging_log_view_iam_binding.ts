import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleLoggingLogViewIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleLoggingLogViewIamBindingArgs {
  bucket: string;
  members: string[];
  name: string;
  parent: string;
  role: string;
  condition: GoogleLoggingLogViewIamBindingArgsCondition;
}
export class google_logging_log_view_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingLogViewIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_logging_log_view_iam_binding");
  }
}