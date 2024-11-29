import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleApigeeEnvironmentIamMemberArgs {
  env_id: string;
  member: string;
  org_id: string;
  role: string;
  condition: Condition;
}
export class google_apigee_environment_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_apigee_environment_iam_member");
  }
}