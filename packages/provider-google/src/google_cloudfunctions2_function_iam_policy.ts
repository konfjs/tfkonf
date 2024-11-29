import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudfunctions2FunctionIamPolicyArgs {
  cloud_function: string;
  policy_data: string;
}
export class google_cloudfunctions2_function_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudfunctions2FunctionIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_cloudfunctions2_function_iam_policy");
  }
}