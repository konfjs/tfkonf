import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudfunctionsFunctionIamPolicyArgs {
  cloud_function: string;
  policy_data: string;
}
export class google_cloudfunctions_function_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudfunctionsFunctionIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_cloudfunctions_function_iam_policy");
  }
}