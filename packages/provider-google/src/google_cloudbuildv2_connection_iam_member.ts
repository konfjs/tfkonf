import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudbuildv2ConnectionIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: Condition;
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