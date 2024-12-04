import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvironmentIamPolicyArgs {
  env_id: string;
  org_id: string;
  policy_data: string;
}

export class google_apigee_environment_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_apigee_environment_iam_policy");
  }
}
