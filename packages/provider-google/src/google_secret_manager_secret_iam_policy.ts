import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleSecretManagerSecretIamPolicyArgs {
  policy_data: string;
  secret_id: string;
}
export class google_secret_manager_secret_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecretManagerSecretIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_secret_manager_secret_iam_policy");
  }
}