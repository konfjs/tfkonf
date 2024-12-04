import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSourcerepoRepositoryIamPolicyArgs {
  policy_data: string;
  repository: string;
}

export class google_sourcerepo_repository_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSourcerepoRepositoryIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_sourcerepo_repository_iam_policy");
  }
}
