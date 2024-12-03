import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleApigeeEnvironmentIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleApigeeEnvironmentIamBindingArgs {
  env_id: string;
  members: string[];
  org_id: string;
  role: string;
  condition: GoogleApigeeEnvironmentIamBindingArgsCondition;
}
export class google_apigee_environment_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_apigee_environment_iam_binding");
  }
}