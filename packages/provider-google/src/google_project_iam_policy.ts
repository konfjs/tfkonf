import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleProjectIamPolicyArgs {
  policy_data: string;
  project: string;
}

export class google_project_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_project_iam_policy");
  }
}
