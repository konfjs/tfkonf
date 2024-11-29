import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudfunctions2FunctionIamMemberArgs {
  cloud_function: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_cloudfunctions2_function_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudfunctions2FunctionIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_cloudfunctions2_function_iam_member");
  }
}