import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleLoggingLogViewIamBindingArgscondition {
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
  condition: GoogleLoggingLogViewIamBindingArgscondition;
}
export class google_logging_log_view_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingLogViewIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_logging_log_view_iam_binding");
  }
}