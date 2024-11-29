import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleApigeeEnvironmentIamBindingArgs {
  env_id: string;
  members: string[];
  org_id: string;
  role: string;
  condition: Condition;
}
export class google_apigee_environment_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_apigee_environment_iam_binding");
  }
}