import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleSccSourceIamPolicyArgs {
  organization: string;
  policy_data: string;
  source: string;
}
export class google_scc_source_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccSourceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_scc_source_iam_policy");
  }
}