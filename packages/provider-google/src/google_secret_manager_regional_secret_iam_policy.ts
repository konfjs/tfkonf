import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleSecretManagerRegionalSecretIamPolicyArgs {
  policy_data: string;
  secret_id: string;
}
export class google_secret_manager_regional_secret_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecretManagerRegionalSecretIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_secret_manager_regional_secret_iam_policy");
  }
}