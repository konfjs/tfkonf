import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudfunctionsFunctionIamMemberArgs {
  cloud_function: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_cloudfunctions_function_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudfunctionsFunctionIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_cloudfunctions_function_iam_member");
  }
}