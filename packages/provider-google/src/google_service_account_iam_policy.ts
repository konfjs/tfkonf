import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleServiceAccountIamPolicyArgs {
  policy_data: string;
  service_account_id: string;
}
export class google_service_account_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleServiceAccountIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_service_account_iam_policy");
  }
}