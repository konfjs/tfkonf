import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapWebIamPolicyArgs {
  policy_data: string;
}
export class google_iap_web_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_iam_policy");
  }
}